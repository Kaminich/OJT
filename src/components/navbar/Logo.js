import React from "react";

const Logo = ({ color, width, height, fontSize }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 27 28" fill="none">
                <path d="M20.3489 12.3703C19.9699 12.7516 19.6797 13.2118 19.4989 13.718C19.3181 14.2243 19.2512 14.7642 19.3029 15.2993L19.2849 15.2813C19.3381 15.9112 19.2531 16.545 19.036 17.1387C18.8189 17.7323 18.4749 18.2714 18.028 18.7184C17.581 19.1653 17.0419 19.5094 16.4482 19.7264C15.8546 19.9435 15.2207 20.0285 14.5909 19.9753L14.6089 19.9933C13.8555 19.9232 13.0988 20.0871 12.4419 20.4628C11.7851 20.8385 11.2601 21.4076 10.9386 22.0926C10.6171 22.7776 10.5146 23.545 10.6452 24.2904C10.7759 25.0357 11.1332 25.7226 11.6685 26.2574C12.2038 26.7922 12.891 27.1489 13.6364 27.2788C14.3819 27.4088 15.1492 27.3056 15.8339 26.9835C16.5186 26.6613 17.0872 26.1359 17.4623 25.4787C17.8374 24.8215 18.0007 24.0647 17.9299 23.3113L17.9489 23.3293C17.8957 22.6995 17.9806 22.0656 18.1977 21.4719C18.4148 20.8783 18.7589 20.3392 19.2058 19.8922C19.6528 19.4453 20.1919 19.1012 20.7855 18.8842C21.3792 18.6671 22.013 18.5821 22.6429 18.6353L22.6239 18.6173C23.2393 18.6726 23.8588 18.5717 24.4249 18.3239C24.9909 18.0761 25.4853 17.6894 25.8621 17.1997C26.2389 16.71 26.4861 16.133 26.5805 15.5224C26.675 14.9117 26.6138 14.2871 26.4026 13.7063C26.1914 13.1256 25.837 12.6076 25.3723 12.2003C24.9076 11.793 24.3476 11.5096 23.7442 11.3764C23.1408 11.2432 22.5135 11.2644 21.9205 11.4381C21.3275 11.6119 20.788 11.9325 20.3519 12.3703H20.3489Z" fill={color} />
                <path d="M12.9718 17.6353L12.9528 17.6173C13.4881 17.6712 14.0287 17.6055 14.5356 17.4249C15.0424 17.2443 15.5028 16.9534 15.8834 16.5731C16.2639 16.1928 16.5553 15.7326 16.7362 15.2259C16.9172 14.7192 16.9833 14.1787 16.9298 13.6433L16.9488 13.6613C16.8956 13.0314 16.9806 12.3976 17.1976 11.8039C17.4147 11.2103 17.7588 10.6712 18.2057 10.2242C18.6527 9.77726 19.1918 9.43316 19.7854 9.21616C20.3791 8.99902 21.0129 8.91409 21.6428 8.96726L21.6238 8.94926C22.3773 9.02006 23.1342 8.85662 23.7914 8.48136C24.4487 8.1061 24.9741 7.53723 25.2961 6.85236C25.6181 6.1675 25.721 5.39997 25.5908 4.65446C25.4606 3.90895 25.1036 3.22177 24.5684 2.68663C24.0333 2.1515 23.3461 1.79446 22.6006 1.66424C21.8551 1.53401 21.0876 1.63692 20.4027 1.95894C19.7178 2.28095 19.149 2.8064 18.7737 3.46361C18.3984 4.12081 18.235 4.87778 18.3058 5.63126L18.2878 5.61226C18.3411 6.24215 18.2563 6.87609 18.0393 7.46981C17.8223 8.06353 17.4782 8.60272 17.0313 9.04976C16.5843 9.49666 16.0451 9.84076 15.4514 10.0578C14.8576 10.2748 14.2237 10.3596 13.5938 10.3063L13.6118 10.3253C13.0765 10.2714 12.5358 10.3371 12.029 10.5177C11.5222 10.6982 11.0618 10.9892 10.6812 11.3695C10.3006 11.7498 10.0093 12.21 9.82834 12.7167C9.64744 13.2234 9.58134 13.7639 9.63484 14.2993L9.61684 14.2813C9.66984 14.9111 9.58474 15.5449 9.36764 16.1385C9.15044 16.732 8.80644 17.2711 8.35954 17.718C7.9126 18.1649 7.37356 18.5089 6.78 18.7261C6.18644 18.9432 5.55265 19.0283 4.92284 18.9753L4.94084 18.9933C4.18736 18.9225 3.43039 19.0859 2.77318 19.4612C2.11598 19.8365 1.59053 20.4053 1.26852 21.0902C0.946502 21.7751 0.843582 22.5426 0.973812 23.2881C1.10404 24.0336 1.46108 24.7208 1.99621 25.2559C2.53135 25.7911 3.21853 26.1481 3.96404 26.2783C4.70955 26.4085 5.47708 26.3056 6.16195 25.9836C6.84681 25.6616 7.41568 25.1362 7.79094 24.479C8.16624 23.8217 8.32964 23.0648 8.25884 22.3113L8.27784 22.3293C8.22464 21.6994 8.30964 21.0656 8.52674 20.4719C8.74374 19.8783 9.08784 19.3392 9.53474 18.8922C9.98174 18.4453 10.5208 18.1012 11.1144 17.8842C11.7081 17.6671 12.3419 17.5821 12.9718 17.6353Z" fill={color} />
                <path d="M6.2699 15.628C6.64892 15.2468 6.9391 14.7866 7.11974 14.2803C7.30038 13.774 7.36702 13.234 7.3149 12.699L7.33389 12.717C7.28069 12.087 7.36565 11.4529 7.58286 10.8591C7.80007 10.2653 8.1443 9.72606 8.5915 9.27906C9.0387 8.83208 9.578 8.48809 10.1719 8.27114C10.7658 8.05418 11.3999 7.96948 12.0299 8.02296L12.0109 8.00496C12.7641 8.07553 13.5208 7.91204 14.1777 7.5368C14.8346 7.16157 15.3597 6.59284 15.6816 5.90819C16.0034 5.22353 16.1062 4.45628 15.976 3.71105C15.8458 2.96582 15.4888 2.2789 14.9539 1.74396C14.419 1.20902 13.732 0.852103 12.9868 0.721883C12.2416 0.591653 11.4743 0.694473 10.7897 1.01629C10.105 1.33811 9.5363 1.86328 9.1611 2.52018C8.7858 3.17708 8.6223 3.93374 8.6929 4.68696L8.6749 4.66896C8.7281 5.29881 8.6431 5.93268 8.426 6.52632C8.2089 7.11996 7.86492 7.65907 7.41796 8.10603C6.97101 8.55299 6.43189 8.89702 5.83825 9.11406C5.24461 9.33116 4.61075 9.41616 3.9809 9.36296L3.9989 9.38096C3.38347 9.32576 2.76406 9.42686 2.19808 9.67476C1.6321 9.92266 1.13785 10.3095 0.761139 10.7993C0.384429 11.289 0.137449 11.866 0.0430689 12.4766C-0.0513011 13.0873 0.0099889 13.7119 0.221259 14.2925C0.432529 14.8732 0.786959 15.3911 1.25169 15.7983C1.71642 16.2056 2.27642 16.4889 2.8798 16.6221C3.48317 16.7552 4.1104 16.7339 4.70337 16.5602C5.29633 16.3864 5.83583 16.0658 6.27189 15.628H6.2699Z" fill={color} />

            </svg>
            <p style={{ marginLeft: "5px", fontSize: fontSize, fontWeight: 750,  color}}>tian</p>
        </div>
    )
}

export default Logo;