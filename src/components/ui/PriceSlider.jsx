import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";
export default function PriceSlider() {
    const [range, setRange] = useState([200000, 10000000]);

    return (
        <div className="w-full max-w-md mx-auto px-4">
            <Slider.Root
                className="relative flex items-center select-none touch-none w-full h-5"
                min={200000}
                max={10000000}
                step={10000}
                value={range}
                onValueChange={setRange}
            >
                <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
                    <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb
                    className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow hover:shadow-md focus:outline-none"
                    aria-label="Minimum value"
                />
                <Slider.Thumb
                    className="block w-5 h-5 bg-white border border-gray-400 rounded-full shadow hover:shadow-md focus:outline-none"
                    aria-label="Maximum value"
                />
            </Slider.Root>

            <div className="mt-4 text-center">
                <span className="font-medium">Selected Range: </span>
                <span>
                    {range[0]} – {range[1]}
                </span>
            </div>
        </div>
    );
}
