import Image from 'next/image';
import React from 'react';
import Photos from '@/public/assets/common/photos.svg';
import TickGood from '@/public/assets/common/tick-good.svg';
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
                <Button
                  text="+Add photos"
                  style={{
                    padding: '10px 30px',
                    borderRadius: '4px',
                  }}
                />
                <p className="limit-text">(Max limit 5 MB per image)</p>
              </div>
            </div>
            <div className="adding-pictures">
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  Adding at least 8 pictures{' '}
                  <span className="small-text">
                    improves the <br></br> chances for a quick sale.
                  </span>
                </p>
              </div>
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  Adding clear Front, Back and Interior pictures{' '}
                  <span className="small-text">
                    of <br></br> your car increases the quality of your Ad and
                    gets you noticed more.
                  </span>
                </p>
              </div>
            </div>
            <div className="adding-pictures-2">
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  Photos should be{' '}
                  <span className="small-text">
                    in &apos;jpeg, jpg, png, gif&apos; format only.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
