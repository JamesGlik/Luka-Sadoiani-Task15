import React from 'react';
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import CheckboxList from '../molecules/CheckboxList';
import EmailField from '../molecules/EmailField';
import Button from '../atoms/Button';
import Image from '../../assets/image.png';

const NewsletterCard = () => (
  <div style={{
    backgroundColor: '#FFFFFF',
    width: '928px',
    height: '641px',
    display: 'flex',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  }}>
    <div style={{
      flex: 1,
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <Heading />
      <Paragraph />
      <CheckboxList />
      <EmailField />
      <Button />
    </div>
    <div style={{
      width: '400px',
      height: '593px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <img src={Image} alt="Visual representation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  </div>
);

export default NewsletterCard;