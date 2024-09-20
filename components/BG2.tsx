"use client";

const BG2 = ({ className }: { className: string }) => {
    return (
        <div className={className + " "}>
            <svg
                width="351"
                height="180"
                viewBox="0 0 351 180"
                className="w-screen"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
            >
                <rect
                    opacity="0.4"
                    x="-122"
                    y="-10"
                    width="473"
                    height="228"
                    fill="url(#pattern0_3276_7111)"
                />
                <defs>
                    <pattern
                        id="pattern0_3276_7111"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            xlinkHref="#image0_3276_7111"
                            transform="matrix(0.000392311 0 0 0.000813873 0 -0.203186)"
                        />
                    </pattern>
                    <image
                        id="image0_3276_7111"
                        width="2549"
                        height="1728"
                    />
                </defs>
            </svg>
        </div>
    );
};

export default BG2;