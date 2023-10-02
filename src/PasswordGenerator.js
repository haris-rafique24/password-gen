import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    // Define characters to use in the password
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';

    // Generate the password
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    // Set the generated password in state
    setPassword(newPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min={1}
        />
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <label>Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default PasswordGenerator;
