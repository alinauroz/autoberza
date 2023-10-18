import React from 'react';
import LabelledInput from './LabelledInput';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="ad-contact-section-header">
        <div className="post-ad-section-heading">
          <span>CONTACT INFORMATION</span>
        </div>
      </div>
      <div className="contact">
        <div className="contact-info">
          <LabelledInput labelText="Name" />
          <LabelledInput labelText="Phone Number" />
          <LabelledInput labelText="Email" />
          <LabelledInput labelText="Location" />
          <LabelledInput labelText="Grad" />
          <LabelledInput labelText="Country" />
        </div>
        <div className="contact-button">
          <Button
            text="send an add"
            style={{
              textTransform: 'uppercase',
              fontWeight: '700',
              borderRadius: '5px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
