export default function SeeMore({ loadMore }: { loadMore: () => any }) {
  return (
    <div>
      <button
        className="font-bold first:mx-auto px-12 py-3 bg-b-blue text-b-dark-blue rounded-full shadow-md cursor-pointer"
        onClick={loadMore}
      >
        See More
      </button>
    </div>
  );
}
