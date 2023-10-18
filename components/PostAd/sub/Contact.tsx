import React, { useMemo } from 'react';
import LabelledInput from './LabelledInput';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import { get } from '@/utils/storage';

const Contact = () => {
  const user = useMemo(() => {
    return get('user');
  }, []);

  return (
    <div className="contact-wrapper">
      <div className="ad-contact-section-header">
        <div className="post-ad-section-heading">
          <span>CONTACT INFORMATION</span>
        </div>
        <p className="text-sm mt-2">
          Buyers will contact you using this information
        </p>
      </div>
      <div className="contact">
        <div className="contact-info">
          <LabelledInput isDisabled value={user?.name} labelText="Name" />
          <LabelledInput
            isDisabled
            value={user?.phone}
            labelText="Phone Number"
          />
          <LabelledInput isDisabled value={user?.email} labelText="Email" />
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
