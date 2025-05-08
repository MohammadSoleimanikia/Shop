import { useState } from "react";
const colors = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FFA500", // Orange
    "#800080", // Purple
    "#00FFFF", // Cyan
    "#000000", // Black
];
export default function ColorMenu() {
    const [selectedColor, setSelectedColor] = useState(null);
    return (
        <>
            <h3 className="font-bold mb-3">Select a Color</h3>
            <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                            selectedColor === color
                                ? "border-gray-900 scale-110"
                                : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                    />
                ))}
            </div>

            {selectedColor && (
                <p className="mt-4">
                    <span className="font-semibold">Selected color: </span>
                    <span
                        className="inline-block w-4 h-4 rounded-full border ml-1 align-middle"
                        style={{ backgroundColor: selectedColor }}
                    ></span>{" "}
                    {selectedColor}
                </p>
            )}
        </>
    );
}
