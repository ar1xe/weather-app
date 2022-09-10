import React from "react";

interface Props {
  id: string;
}

const GlobalSVGSelector = ({ id }: Props) => {
  switch (id) {
    case "header-logo":
      return (
        <svg
          enable-background="new 0 0 128 128"
          version="1.1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
        >
          <g id="Layer_1">
            <rect
              fill="#F4F5F5"
              height="1520"
              opacity="0"
              width="727.938"
              x="-379.984"
              y="-731"
            />
          </g>
          <g id="Layer_2">
            <g>
              <circle cx="64" cy="64" fill="#007DB9" r="64" />
              <g>
                <defs>
                  <circle cx="64" cy="64" id="SVGID_85_" r="64" />
                </defs>
                <clipPath id="SVGID_2_">
                  <use overflow="visible" />
                </clipPath>
                <polygon
                  clip-path="url(#SVGID_2_)"
                  fill="#0071B1"
                  points="94.898,43.704 128,76.563 128,128 57.735,128 22.193,92.504    "
                />
                <polygon
                  clip-path="url(#SVGID_2_)"
                  fill="#006DAD"
                  points="106.318,67 128,88.555 128,128 57.735,128 22.193,92.504    "
                />
              </g>
              <circle cx="47.36" cy="46.722" fill="#FFCC07" r="25.167" />
              <circle cx="47.36" cy="46.722" fill="#F4EC4E" r="17.182" />
              <circle cx="47.36" cy="46.722" fill="#F5ECDF" r="8.682" />
              <path
                d="M97.633,62.205c0.681-2.096,1.061-4.327,1.061-6.65c0-11.874-9.626-21.5-21.5-21.5    c-9.046,0-16.772,5.593-19.947,13.504c-2.813-1.787-6.14-2.837-9.72-2.837c-10.009,0-18.124,8.095-18.163,18.095    c-6.995,2.527-12.169,9.205-12.169,17.071c0,9.967,7.805,18.05,17.805,18.157V98h58.527c10.033,0,18.167-8.106,18.167-18.139    C111.693,71.242,105.685,64.069,97.633,62.205z"
                fill="#6AC5F0"
              />
              <path
                d="M57.247,47.559c-2.813-1.787-6.14-2.837-9.72-2.837c-10.009,0-18.124,8.095-18.163,18.095    c-6.995,2.527-12.169,9.205-12.169,17.071c0,3.964,1.25,7.618,3.366,10.603c-0.942-2.244-1.469-4.714-1.469-7.314    c0-8.001,5.499-14.795,12.624-17.365c0.04-10.172,8.306-18.407,18.502-18.407c3.646,0,7.036,1.068,9.901,2.886    c3.234-8.047,11.104-13.736,20.319-13.736c4.056,0,7.851,1.105,11.109,3.024c-3.808-3.423-8.828-5.524-14.352-5.524    C68.148,34.055,60.421,39.648,57.247,47.559z"
                fill="#A8DBEE"
              />
              <path
                d="M73.519,67.819c-1.978-1.257-4.317-1.995-6.834-1.995c-7.037,0-12.742,5.691-12.77,12.722    c-4.918,1.776-8.556,6.472-8.556,12.002c0,2.787,0.879,5.356,2.366,7.454c-0.662-1.577-1.033-3.314-1.033-5.142    c0-5.625,3.866-10.402,8.876-12.209c0.028-7.152,5.84-12.941,13.008-12.941c2.564,0,4.947,0.751,6.961,2.029    c2.274-5.657,7.807-9.657,14.285-9.657c2.851,0,5.52,0.777,7.81,2.126c-2.677-2.407-6.207-3.884-10.09-3.884    C81.183,58.326,75.751,62.258,73.519,67.819z"
                fill="#A8DBEE"
              />
            </g>
          </g>
        </svg>
      );
    case "change_theme":
      return (
        <svg
          fill="#123876"
          width="40"
          height="40"
          viewBox="0 0 24 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M12.0001 1.13611L5.63604 7.50002C2.12132 11.0147 2.12132 16.7132 5.63604 20.2279C7.39343 21.9853 9.69679 22.864 12.0001 22.864C12.288 22.864 12.5759 22.8502 12.8627 22.8228C14.8706 22.6306 16.8264 21.7657 18.3641 20.2279C21.8788 16.7132 21.8788 11.0147 18.3641 7.50002L12.0001 1.13611ZM7.05025 8.91423L12 3.96448L12.0001 20.864C10.2086 20.864 8.41711 20.1806 7.05025 18.8137C4.31658 16.0801 4.31658 11.6479 7.05025 8.91423Z"
            fill="#6AC5F0"
            fill-rule="evenodd"
          />
        </svg>
      );
    case "sun":
      return (
        <svg
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
        >
          <defs>
            <style></style>
          </defs>
          <title />
          <circle fill="#efcc00" cx="32" cy="32" r="17" />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="32"
            x2="32"
            y1="5"
            y2="11"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="32"
            x2="32"
            y1="53"
            y2="59"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="59"
            x2="53"
            y1="32"
            y2="32"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="11"
            x2="5"
            y1="32"
            y2="32"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="51.09"
            x2="46.85"
            y1="12.91"
            y2="17.15"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="17.15"
            x2="12.91"
            y1="46.85"
            y2="51.09"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="51.09"
            x2="46.85"
            y1="51.09"
            y2="46.85"
          />
          <line
            fill="none"
            stroke="#efcc00"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            x1="17.15"
            x2="12.91"
            y1="17.15"
            y2="12.91"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default GlobalSVGSelector;
