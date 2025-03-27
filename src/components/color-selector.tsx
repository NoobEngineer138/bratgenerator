/* eslint-disable */
import { Button } from "@/components/ui/button"

interface ColorSelectorProps {
    currentColor: string
    onColorChange: (color: string) => void
}

interface ColorOption {
    id: string;
    name: string;
    style: {
        backgroundColor: string;
        border: string;
    };
    class?: string;
}

export default function ColorSelector({ currentColor, onColorChange }: ColorSelectorProps) {
    const colors: any[] = [
        { id: "black", name: "黑色反转", style: { backgroundColor: "#000",border:"1px solid #000" } },
        { id: "white", name: "白色", style: { backgroundColor: "#fff",border:"1px solid #000" }},
        { id: "green", name: "绿色", style: { backgroundColor: "#8ACF00",border:"1px solid #000" } },
        { id: "blue", name: "蓝色",  style: { backgroundColor: "#0A00AD",border:"1px solid #000" }  },
    ]

    return (
        <div className="mb-6 flex justify-center">
            <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                    <Button
                        key={color.id}
                        variant={currentColor === color.id ? "default" : "outline"}
                        className={`${currentColor === color.id && color.class ? color.class : ""} relative text-xs md:text-sm w-6 h-6 md:w-8 md:h-8 rounded-full p-0`}
                        style={color.style}
                        onClick={() => onColorChange(color.id)}
                    >
                        {/* <span
                            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${color.class || ''}`}
                            style={color.style}
                        ></span> */}
                    </Button>
                ))}
            </div>
        </div>
    )
}

