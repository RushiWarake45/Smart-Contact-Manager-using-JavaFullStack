
const Sidebar = ({
  allCount,
  favoriteCount,
  clientsCount,
  partnersCount,
  friendsCount,
  workCount,
  setCurrFilter,
  currFilter,
}) => {
  const filters = [
    { name: "All", count: allCount },
    { name: "Work", count: workCount },
    { name: "Client", count: clientsCount },
    { name: "Partner", count: partnersCount },
    { name: "Friend", count: friendsCount },
    { name: "Favorite", count: favoriteCount },
  ];

  return (
    <aside className="flex w-full shrink-0 flex-col border-b border-gray-200 bg-white md:w-56 md:border-b-0 md:border-r lg:w-64 xl:w-[280px]">

      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <p className="mb-3 text-xs font-bold tracking-[0.15em] text-gray-400 sm:mb-4">
          FILTER CONTACTS
        </p>

        {/* Horizontal filters on mobile; vertical on desktop */}
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] md:flex-col md:overflow-visible md:pb-0">
          {filters.map((filter) => {
            const active = currFilter === filter.name;

            return (
              <button
                key={filter.name}
                onClick={() => setCurrFilter(filter.name)}
                className={`flex shrink-0 items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 md:w-full md:px-4 md:py-3 ${
                  active
                    ? "bg-[#483AEA] text-white shadow-md shadow-violet-200"
                    : "border border-gray-100 bg-gray-50 text-gray-600 hover:border-violet-100 hover:bg-violet-50 hover:text-[#483AEA] md:border-transparent md:bg-transparent"
                }`}
              >
                <span>{filter.name}</span>
                <span
                  className={`min-w-6 rounded-lg px-1.5 py-0.5 text-center text-xs ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-gray-200/70 text-gray-500"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Total count: hidden on mobile to save space */}
      <div className="mt-auto hidden border-t border-gray-100 px-6 py-5 md:block">
        <p className="text-sm text-gray-500">
          <span className="font-bold text-gray-800">{allCount}</span>{" "}
          total contacts
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
