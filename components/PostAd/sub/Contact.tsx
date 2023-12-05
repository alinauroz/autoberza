import React, { useMemo } from 'react';
import LabelledInput from './LabelledInput';
import Button from '@/components/Elements/Button';
import { get } from '@/utils/storage';
import { FormattedMessage, useIntl } from 'react-intl';

const Contact = ({ creating }: { creating: boolean }) => {
  const user = useMemo(() => {
    return get('user');
  }, []);

  const intl = useIntl();

  return (
    <div className="contact-wrapper">
      <div className="ad-contact-section-header">
        <div className="post-ad-section-heading">
          <span>
            <FormattedMessage
              defaultMessage="CONTACT INFORMATION"
              id="contact.contact-info"
            />
          </span>
        </div>
        <p className="text-sm mt-2">
          <FormattedMessage
            defaultMessage="Buyers will contact you using this information"
            id="contact.your-info"
          />
        </p>
      </div>
      <div className="contact">
        <div className="contact-info">
          {[
            {
              label: intl.formatMessage({
                defaultMessage: 'Name',
                id: 'contact.name',
              }),
              value: user?.name || '',
            },
            {
              label: intl.formatMessage({
                defaultMessage: 'Phone Number',
                id: 'contact.phone-number',
              }),
              value: user?.phone || '',
            },
            {
              label: intl.formatMessage({
                defaultMessage: 'Email',
                id: 'contact.email',
              }),
              value: user?.email || '',
            },
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
            text={intl.formatMessage({
              defaultMessage: 'Submit',
              id: 'contact.submit',
            })}
            loading={creating}
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
