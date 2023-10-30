'use client';

import { GET_AD } from '@/components/Ad';
import Loading from '@/components/Elements/Loading';
import PostAd from '@/components/PostAd';
import { useSearchParams } from 'next/navigation';
import { gql, useQuery } from 'urql';

const GET_AD_QUERY = gql`
  ${GET_AD}
`;

function EditAd() {
  const searchParams = useSearchParams();
  const [{ fetching, data }] = useQuery({
    query: GET_AD_QUERY,
    pause: !searchParams.get('id'),
    variables: {
      id: searchParams.get('id'),
    },
  });

  if (fetching) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loading />
      </div>
    );
  }
  const ad = data?.ads?.data?.[0];
  return <PostAd prefill={ad} />;
}

export default EditAd;
