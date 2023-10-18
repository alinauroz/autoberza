import Link from 'next/link';
import React from 'react';

function ChooseCateogry({
  categories,
}: {
  categories: Array<{ text: string }>;
}) {
  return (
    <div>
      <p className="header-heading text-center mt-12">Choose a Category</p>
      <p className="header-text">
        Choose a category to post an ad from the following list
      </p>
      <div className="w-10/12 mx-auto grid grid-cols-3 md:grid-cols-4 my-8 gap-4">
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

export default ChooseCateogry;
