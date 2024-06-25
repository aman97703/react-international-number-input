# React International Number Input

A React component for international number input with locale-specific formatting and optional prefix and suffix support.

## Features

- Locale-aware number formatting (e.g., `27678678.45` to `27678678,45` for German locale)
- Optional prefix (e.g., currency symbols)
- Optional suffix (e.g., percentage symbols)
- Handles user input and paste events with proper validation

## Installation

You can install the package using npm:

```bash
npm install react-international-number-input
or
yarn add react-international-number-input
```
## Props

| Prop | Type              |  descriptin |
|--------|--------------------------|---|
| value   | number |The numeric value of the input.|
| placeholder   | string |Placeholder text for the input field.|
| className   | string |CSS class for the input field.|
| style  | React.CSSProperties |Inline styles for the input field.|
| handleChange   | (value: number) => void |Function to handle changes in the input value.|
| changeFromParent   | boolean |If true, updates from the parent component will change the input value.|
| disabled   | boolean |If true, disables the input field.|
| prefix   | string |Prefix to display before the number (e.g., currency symbols).|
| suffix   | string |Suffix to display after the number (e.g., percentage symbols).|
## Usage/Examples

```javascript
import React, { useState } from 'react';
import InternationalNumberInput from 'react-international-number-input';

const App = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <h1>International Number Input</h1>
      <InternationalNumberInput
        value={value}
        handleChange={(newValue) => setValue(newValue || 0)}
        placeholder="Enter amount"
        className="number-input"
        style={{ width: '200px', padding: '5px' }}
        disabled={false}
        prefix="$"
        suffix="%"
      />
    </div>
  );
};

export default App;

```


## 🚀 About Me
I love turning ideas into pixels! I'm a MERN stack developer with a passion for building intuitive and impactful web experiences. I thrive in collaborative environments where I can learn from seasoned professionals and contribute my fresh perspective. I'm Passionate about leveraging cutting-edge technologies to deliver scalable and efficient solutions. I'm eager to find a role where I can make a real difference and keep my code as clean as my coffee.

🌐 https://myportfolio2868.netlify.app/

🚀 MERN Stack Development

🌐 Full-Stack Web Development

💡 Frontend: React.js, HTML5, CSS3, JavaScript

🔧 Backend: Node.js, Express.js

🛠️ Database: MongoDB

🔐 RESTful API Design and Integration

🔄 Version Control: Git, GitHub


## Support

For support, email aman97703@gmail.com.

