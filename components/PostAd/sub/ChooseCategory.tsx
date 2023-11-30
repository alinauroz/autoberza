import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function ChooseCategory({
  categories,
}: {
  categories: Array<{ text: string }>;
}) {
  return (
    <div className="mt-10 md:mt-0 mb-10">
      <p
        className="header-heading text-center md:mt-12 !display-block"
        style={{ display: 'block' }}
      >
        <FormattedMessage
          defaultMessage="Choose a Category"
          id="choosecategory.category"
        />
      </p>
      <p className="header-text">
        <FormattedMessage
          defaultMessage="Choose a category to post an ad from the following list"
          id="choosecategory.post-ad"
        />
      </p>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8 gap-4">
        {categories.map((c) => (
          <Link href={'/post-ad?category=' + c.text} key={c.text}>
            <div className="bg-[#00c489] text-white text-2xl font-medium p-12">
              {c.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
