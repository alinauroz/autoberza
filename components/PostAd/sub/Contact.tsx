import React, { useMemo } from 'react';
import LabelledInput from './LabelledInput';
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
          {[
            { label: 'Name', value: user?.name || '' },
            { label: 'Phone Number', value: user?.phone || '' },
            { label: 'Email', value: user?.email || '' },
          ].map(({ label, value }, i) => {
            return (
              <LabelledInput
                key={i}
                isDisabled
                value={value}
                labelText={label}
                labelStyles={{
                  backgroundColor: '#fff',
                }}
              />
            );
          })}
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
