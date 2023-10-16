import Image from 'next/image';
import React from 'react';
import Photos from '@/public/assets/common/photos.svg';
import Button from '@/components/Elements/Button';

const UploadFile = () => {
  return (
    <div className="post-ad-upload-container">
      <div className="post-ad-upload-files-wrapper">
        <div className="post-ad-upload-files-wrapper-container">
          <div className="post-ad-upload-files-wrapper-heading">
            Upload Photos
          </div>
          <div className="post-ad-upload-files-wrapper-uploading">
            <div className="photo-adding-button">
              <Image src={Photos} alt="" />
              <div className="adding-photos-with-limit">
                <Button text="+Add photos" />
                <p className="limit-text">(Max limit 5 MB per image)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
