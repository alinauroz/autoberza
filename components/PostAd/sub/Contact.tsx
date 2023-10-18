import React from 'react';
import LabelledInput from './LabelledInput';
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
          <LabelledInput isDisabled labelText="Name" />
          <LabelledInput isDisabled labelText="Phone Number" />
          <LabelledInput isDisabled labelText="Email" />
          <LabelledInput isDisabled labelText="Location" />
          <LabelledInput isDisabled labelText="Grad" />
          <LabelledInput isDisabled labelText="Country" />
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
