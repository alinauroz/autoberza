import { useInViewport } from 'react-in-viewport';
import { useEffect, useRef } from 'react';
import Loading from './Loading';

const LoadMore = ({
  moreExist,
  loading,
  reverse,
  onClick,
  autoLoadMore = true,
}: {
  moreExist: boolean;
  loading: boolean;
  reverse?: boolean;
  onClick: () => void;
  autoLoadMore?: boolean;
}) => {
  const loadMoreRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { inViewport } = useInViewport(loadMoreRef);

  useEffect(() => {
    if (!autoLoadMore) {
      return;
    }
    if (loading || !inViewport) {
      return;
    }
    onClick();
  }, [autoLoadMore, inViewport, loading, onClick]);

  return (
    <div className="mt-7">
      {loading ? (
        <div className="flex-grow flex justify-center items-center">
          <Loading />
        </div>
      ) : moreExist ? (
        <button
          className="hover:bg-gray-300 p-1 m-auto h-full rounded flex justify-center items-center focus:outline-none opacity-75"
          onClick={onClick}
        >
          <div ref={loadMoreRef}>Load More</div>
        </button>
      ) : null}
    </div>
  );
};

export default LoadMore;
