import React from 'react';
import ContactForm from '../components/shared/ContactForm';

const ContactPage = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: 'calc(100vh - 300px)', backgroundColor: 'var(--color-bg-alt)' }}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
