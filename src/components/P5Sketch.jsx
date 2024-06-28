import React, { useEffect, useRef } from "react";

const P5Sketch = () => {
    const canvasRef = useRef(null);
    const sketchRef = useRef(null);

    useEffect(() => {
        const loadP5 = () => {
            return new Promise((resolve) => {
                const script = document.createElement("script");
                script.src =
                    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
                script.onload = resolve;
                document.body.appendChild(script);
            });
        };

        const runSketch = () => {
            sketchRef.current = new window.p5((p) => {
                let pg1, canvas, bufferCanvas;
                let img;
                let bufferDensity;
                let bufferX, bufferY;
                let tilesX = 68;
                let tilesY = 68;
                let tileW, tileH;
                let speed = 6;
                let minimumSize = 0;
                let displayHeightRatio = 1;
                let canvasHeight, canvasWidth;
                let backgroundColor = "#739786";
                let pixelColor = "384a42";

                p.preload = () => {
                    img = p.loadImage("sgb.png");
                };

                function calculateGridSize() {
                    canvasHeight = p.windowHeight * displayHeightRatio;
                    canvasWidth = p.windowWidth;
                    let ratio = canvasWidth / canvasHeight;
                    // console.log(
                    //     "displayHeight: " +
                    //         p.windowHeight +
                    //         " displayWidth: " +
                    //         p.windowWidth +
                    //         " ratio: " +
                    //         ratio
                    // );
                    if (ratio > 1) {
                        bufferY = 10;
                        bufferX = p.floor(
                            ((tilesX + bufferY * 2) * ratio - tilesX) / 2
                        );
                    } else {
                        bufferX = 0;
                        bufferY = p.floor(
                            ((tilesY + bufferX * 2) / ratio - tilesY) / 2
                        );
                    }
                    // console.log(bufferX + " " + bufferY);
                }

                let textContent = "Scrolling Text Behind Pixels";
                let textX, textY;
                let textSpeed = 2;

                p.setup = () => {
                    calculateGridSize();
                    p.pixelDensity(1);
                    let cnv = p.createCanvas(
                        p.windowWidth,
                        p.windowHeight * displayHeightRatio
                    );
                    cnv.parent(canvasRef.current);
                    pg1 = p.createGraphics(tilesX, tilesY, p.WEBGL);
                    canvas = p.createGraphics(tilesX, tilesY, p.WEBGL);
                    bufferCanvas = p.createGraphics(p.width, p.height);
                    p.frameRate(60);
                    tileW = Math.floor(p.width / (tilesX + bufferX * 2));
                    tileH = Math.floor(p.height / (tilesY + bufferY * 2));
                    textX = p.width;
                    textY = p.height / 2;
                    drawBuffer();
                };

                function drawBuffer() {
                    bufferCanvas.background(backgroundColor);
                    bufferCanvas.fill(pixelColor);
                    bufferCanvas.noStroke();
                    for (let y = 0; y < tilesY + bufferY * 2; y++) {
                        for (let x = 0; x < tilesX + bufferX * 2; x++) {
                            let xPos = x * tileW;
                            let yPos = y * tileH;
                            if (
                                x <= bufferX ||
                                x >= tilesX + bufferX ||
                                y <= bufferY ||
                                y >= tilesY + bufferY
                            ) {
                                bufferCanvas.push();
                                bufferCanvas.translate(xPos + 4, yPos + 4);
                                bufferCanvas.ellipse(
                                    0,
                                    0,
                                    bufferDensity,
                                    bufferDensity
                                );
                                bufferCanvas.pop();
                            }
                        }
                    }
                }

                p.draw = () => {
                    p.background("#739786");
                    p.image(bufferCanvas, 0, 0);
                    pg1.clear();
                    pg1.background(220);
                    pg1.push();
                    pg1.imageMode(p.CENTER);
                    pg1.scale(1, -1);
                    img.resize(50, 0);
                    pg1.rotateY(p.radians(p.millis() * speed * 0.01));
                    pg1.image(img, 0, 0);
                    pg1.pop();
                    canvas.imageMode(p.CENTER);
                    canvas.background(0);
                    canvas.push();
                    canvas.image(pg1, 0, 0);
                    canvas.pop();
                    canvas.loadPixels();
                    p.noStroke();
                    for (let y = bufferY + 1; y < tilesY + bufferY; y++) {
                        for (let x = bufferX + 1; x < tilesX + bufferX; x++) {
                            let xPos = x * tileW;
                            let yPos = y * tileH;
                            let i =
                                4 *
                                ((y - bufferY) * canvas.width + (x - bufferX));
                            let r = 255 - canvas.pixels[i];
                            let g = 255 - canvas.pixels[i + 1];
                            let b = 255 - canvas.pixels[i + 2];
                            let a = canvas.pixels[i + 3];
                            let c = p.color(r, g, b);
                            let brightnessVal = p.brightness(c);
                            brightnessVal =
                                brightnessVal < 50 ? 0 : brightnessVal * 2.5;
                            let alphaVal = p.map(brightnessVal, 0, 255, 0, 255);
                            p.fill(39, 53, 46, alphaVal);
                            p.push();
                            p.translate(xPos + 4, yPos + 4);
                            p.square(1, 1, tileH);
                            p.pop();
                        }
                    }
                };

                p.windowResized = () => {
                    p.resizeCanvas(
                        p.windowWidth,
                        p.windowHeight * displayHeightRatio
                    );
                    calculateGridSize();
                    tileW = Math.floor(p.width / (tilesX + bufferX * 2));
                    tileH = Math.floor(p.height / (tilesY + bufferY * 2));
                    drawBuffer();
                };
            }, canvasRef.current);
        };

        const initializeSketch = async () => {
            await loadP5();
            runSketch();
        };

        initializeSketch();

        return () => {
            if (sketchRef.current) {
                sketchRef.current.remove();
            }
        };
    }, []);

    return (
        <>
            <div
                ref={canvasRef}
                id="canvas-container"
                className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden flex flex-col justify-end"
            ></div>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-[0]"></div>
        </>
    );
};

export default P5Sketch;
