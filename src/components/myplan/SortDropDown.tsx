"use client";

interface SortDropdownProps {
  sortBy: "duration" | "calories" | "rating";

  setSortBy: (
    value: "duration" | "calories" | "rating"
  ) => void;
}

const SortDropdown = ({
  sortBy,
  setSortBy,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">
        Sort By
      </span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(
        e.target.value as
        | "duration"
        | "calories"
        | "rating"
        )
        }
        className="rounded-lg border border-[#292d34] bg-[#15171c] px-3 py-2 text-xs text-white outline-none">
        <option value="duration">
          Duration
        </option>

        <option value="calories">
          Calories
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;