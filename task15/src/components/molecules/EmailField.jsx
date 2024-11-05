import React from 'react';
import InputField from '../atoms/InputField';

const EmailField = () => (
  <div style={{ marginTop: '16px' }}>
    <label style={{ fontSize: '12px', color: '#242742', marginBottom: '8px' }}>
      Email address
    </label>
    <InputField />
  </div>
);

export default EmailField;