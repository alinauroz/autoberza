import Image from 'next/image';
import React, { useState } from 'react';
import Photos from '@/public/assets/common/photos.svg';
import TickGood from '@/public/assets/common/tick-good.svg';
import UploadComponent from '@/components/Elements/UploadComponent';
import { FormattedMessage } from 'react-intl';

const UploadFile = ({ prefill }: { prefill: any }) => {
  const [links, setLinks] = useState<string[]>(prefill?.photos || []);

  if (links.length > 0) {
    return (
      <div className="post-ad-upload-container">
        <div className="post-ad-upload-files-wrapper">
          <div className="post-ad-upload-files-wrapper-container my-4">
            <div className="post-ad-upload-files-wrapper-heading">
              <FormattedMessage
                defaultMessage="Upload Photos"
                id="uploadfile.photos"
              />
            </div>
            <div className="post-ad-upload-files-wrapper-uploading p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <input type="hidden" name="photos" value={links.join('|')} />
                {links.map((link, index) => (
                  <div
                    key={link}
                    className="flex-wrap h-32 w-full md:w-48 md:h-48 rounded-md"
                    style={{
                      background: `url(${link})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    <span
                      className="float-right m-2 drop-shadow-md cursor-pointer"
                      onClick={() => {
                        setLinks(links.filter((l, i) => i !== index));
                      }}
                    >
                      ✕
                    </span>
                  </div>
                ))}
              </div>
              <div className="py-4 flex justify-center items-center">
                <UploadComponent
                  onUpload={(file: { url: string }) => {
                    links.push(file.url);
                    setLinks([...links]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="post-ad-upload-container">
      <div className="post-ad-upload-files-wrapper">
        <div className="post-ad-upload-files-wrapper-container">
          <div className="post-ad-upload-files-wrapper-heading">
            <FormattedMessage
              defaultMessage="Upload Photos"
              id="uploadfile.photos"
            />
          </div>
          <div className="post-ad-upload-files-wrapper-uploading">
            <div className="photo-adding-button">
              <Image src={Photos} alt="" className="photo-img" />
              <div className="adding-photos-with-limit">
                <UploadComponent
                  onUpload={(file: { url: string }) => {
                    links.push(file.url);
                    setLinks([...links]);
                  }}
                />
                <input type="hidden" name="photos" value={links.join('|')} />
                <p className="limit-text">
                  <FormattedMessage
                    defaultMessage="(Max limit 5 MB per image)"
                    id="uploadfile.photos-size"
                  />
                </p>
              </div>
            </div>
            <div className="adding-pictures">
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  <FormattedMessage
                    defaultMessage="Adding at least 8 pictures"
                    id="uploadfile.photos-max1"
                  />{' '}
                  <span className="small-text">
                    <FormattedMessage
                      defaultMessage="improves the"
                      id="uploadfile.photos-max2"
                    />{' '}
                    <br></br>
                    <FormattedMessage
                      defaultMessage="chances for a quick sale."
                      id="uploadfile.photos-max"
                    />
                  </span>
                </p>
              </div>
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  <FormattedMessage
                    defaultMessage="Adding clear Front, Back and Interior pictures"
                    id="uploadfile.your-photos1"
                  />{' '}
                  <span className="small-text">
                    <FormattedMessage
                      defaultMessage="of"
                      id="uploadfile.your-photos2"
                    />{' '}
                    <br></br>
                    <FormattedMessage
                      defaultMessage="your car increases the quality of your Ad and gets
                      you noticed more."
                      id="uploadfile.your-photos"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="adding-pictures-2">
              <div className="adding-pictures-limit">
                <Image src={TickGood} alt="" className="tick" />
                <p className="adding-pictures-text">
                  <FormattedMessage
                    defaultMessage="Photos should be"
                    id="uploadfile.photos-format1"
                  />{' '}
                  <span className="small-text">
                    <FormattedMessage
                      defaultMessage="in 'jpeg, jpg, png, gif' format only."
                      id="uploadfile.photos-format"
                    />
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
