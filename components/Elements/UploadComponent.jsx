import React, { useMemo } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import Button from './Button';
import { useIntl } from 'react-intl';

function UploadComponent({ onUpload }) {
  const uploadWidget = useMemo(() => {
    return window?.cloudinary?.createUploadWidget(
      {
        cloudName: 'dq4anbcep',
        uploadPreset: 'ml_default',
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          onUpload(result.info);
        }
      }
    );
  }, [onUpload]);

  const intl = useIntl();

  return (
    <div>
      <CloudinaryContext cloudName="dq4anbcep">
        <Button
          type="button"
          text={intl.formatMessage({
            defaultMessage: '+Add photos',
            id: 'uploadcomponent.photos',
          })}
          style={{
            padding: '10px 30px',
            borderRadius: '4px',
          }}
          onClick={() => uploadWidget.open()}
        />
      </CloudinaryContext>
    </div>
  );
}

export default UploadComponent;
