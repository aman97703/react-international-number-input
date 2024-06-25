import React, {
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  ClipboardEvent,
} from "react";

interface InternationalNumberInputProps {
  value: number;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  handleChange: (value: number | null) => void;
  changeFromParent?: boolean;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
}

const InternationalNumberInput: React.FC<InternationalNumberInputProps> = ({
  value,
  placeholder,
  className,
  style,
  handleChange,
  changeFromParent,
  disabled,
  prefix = "",
  suffix = "",
}) => {
  const [rawInput, setRawInput] = useState<string>(
    prefix + value.toString().replace(".", ",") + suffix
  );
  const [decimalSeparator, setDecimalSeparator] = useState<string>(".");
  const userLocale = navigator.language || "en-US";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const testNumber = 1.1;
    const formattedNumber = new Intl.NumberFormat(userLocale).format(
      testNumber
    );
    setDecimalSeparator(formattedNumber.includes(",") ? "," : ".");
  }, [userLocale]);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!inputValue.startsWith(prefix)) {
      inputValue = prefix + inputValue;
    }

    if (!inputValue.endsWith(suffix)) {
      inputValue = inputValue + suffix;
    }

    const actualValue = inputValue.slice(
      prefix.length,
      inputValue.length - suffix.length
    );
    const validChars =
      decimalSeparator === "," ? /^[0-9]*,?[0-9]*$/ : /^[0-9]*\.?[0-9]*$/;

    if (
      validChars.test(actualValue) &&
      !actualValue.match(new RegExp(`[${decimalSeparator}]{2,}`))
    ) {
      setRawInput(inputValue);
      const normalizedValue = actualValue.replace(decimalSeparator, ".");
      if (normalizedValue === "" || !isNaN(normalizedValue as any)) {
        handleChange(normalizedValue === "" ? 0 : parseFloat(normalizedValue));
      }
    }
  };

  useEffect(() => {
    const formattedValue = value.toString().replace(".", decimalSeparator);
    setRawInput(prefix + formattedValue + suffix);
  }, [changeFromParent]);

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("Text");

    const input = inputRef.current;
    if (!input) return;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;

    const validChars =
      decimalSeparator === "," ? /^[0-9]*,?[0-9]*$/ : /^[0-9]*\.?[0-9]*$/;

    if (
      validChars.test(pastedText) &&
      !pastedText.match(new RegExp(`[${decimalSeparator}]{2,}`))
    ) {
      const newValue =
        rawInput.slice(0, start) + pastedText + rawInput.slice(end);

      if (
        validChars.test(newValue) &&
        !newValue.match(new RegExp(`[${decimalSeparator}]{2,}`))
      ) {
        setRawInput(newValue);

        const normalizedValue = newValue.replace(decimalSeparator, ".");

        if (normalizedValue === "" || !isNaN(parseFloat(normalizedValue))) {
          handleChange(
            normalizedValue === "" ? null : parseFloat(normalizedValue)
          );
        }

        setTimeout(() => {
          input.setSelectionRange(
            start + pastedText.length,
            start + pastedText.length
          );
        }, 0);
      }
    }
  };

  // useEffect(() => {
  //   const input = inputRef.current;
  //   const handleCursorPosition = () => {
  //     if (
  //       input &&
  //       input.selectionStart !== null &&
  //       input.selectionStart < prefix.length
  //     ) {
  //       input.setSelectionRange(prefix.length, prefix.length);
  //     } else if (
  //       input &&
  //       input.selectionStart !== null &&
  //       input.selectionEnd !== null &&
  //       input.selectionEnd > rawInput.length - suffix.length
  //     ) {
  //       input.setSelectionRange(
  //         rawInput.length - suffix.length,
  //         rawInput.length - suffix.length
  //       );
  //     }
  //   };

  //   if (input) {
  //     input.addEventListener("keydown", handleCursorPosition);
  //     input.addEventListener("mousedown", handleCursorPosition);
  //   }

  //   return () => {
  //     if (input) {
  //       input.removeEventListener("keydown", handleCursorPosition);
  //       input.removeEventListener("mousedown", handleCursorPosition);
  //     }
  //   };
  // }, [prefix, suffix, rawInput.length]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={rawInput}
      onChange={handleValueChange}
      onPaste={handlePaste}
      placeholder={placeholder || ""}
      className={className || ""}
      style={style}
      disabled={disabled === true}
    />
  );
};

export default InternationalNumberInput;
