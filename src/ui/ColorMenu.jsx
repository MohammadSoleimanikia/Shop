const colors = [
    "red", // Red
    "lime", // Lime
    "black", // Blue
    "grey", // Yellow
    "orange", // Orange
    "purple", // Purple
    "cyan", // Cyan
    "blue", // Black
];
export default function ColorMenu({filters,filtersHandler}) {
    return (
        <>
            <h3 className="font-bold mb-3">Select a Color</h3>
            <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => filtersHandler("colors", color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                            filters.colors === color
                                ? "border-gray-900 scale-110"
                                : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                    />
                ))}
            </div>

            {filters.colors && (
                <p className="mt-4">
                    <span className="font-semibold">Selected color: </span>
                    <span
                        className="inline-block w-4 h-4 rounded-full border ml-1 align-middle"
                        style={{ backgroundColor: filters.colors }}
                    ></span>{" "}
                    {filters.colors}
                </p>
            )}
        </>
    );
}
