import React from 'react';

const CheckboxItem = ({ label }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
    <div
      style={{
        width: '21px',
        height: '21px',
        backgroundColor: '#FF6155',
        borderRadius: '50%',
        marginRight: '10px',
      }}
    />
    <span style={{ color: '#242742', fontSize: '16px' }}>{label}</span>
  </div>
);

export default CheckboxItem;