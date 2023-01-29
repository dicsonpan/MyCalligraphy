import Image from "next/image";
import { useState } from "react";

const Display = ({ text, charSet }: { text: string; charSet: Set<string> }) => {
    const tokens = [];
    for (const line of text.split("\n")) {
        if (line === "") {
            // Preserve empty lines
            tokens.push([]);
            continue;
        }
        tokens.push(line.split(""));
    }

    const [isVertical, setIsVertical] = useState(false);
    const [isDarkBg, setIsDarkBg] = useState(false);

    return (
        <section>
            <h2>display</h2>
            <div id="controls">
                <span>horizontal + left-to-right</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isVertical}
                        onChange={(e) => setIsVertical(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
                <span>vertical + right-to-left</span>

                <br />
                <br />

                <span>light background + dark text</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isDarkBg}
                        onChange={(e) => setIsDarkBg(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
                <span>dark background + light text</span>
            </div>
            <div
                id="display"
                className={
                    (isVertical ? "verticaldisplay " : "") +
                    (isDarkBg ? "darkbgdisplay " : "")
                }
            >
                {tokens.map((line, i) => (
                    <div
                        key={i}
                        className={`line ${isVertical ? "verticalline" : ""}`}
                    >
                        {line.map((char, i) => (
                            <div
                                key={i}
                                className={
                                    "char " + (isDarkBg ? "darkbgchar" : "")
                                }
                            >
                                <Image src={`/c/${char}.png`} alt={char} fill />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Display;
