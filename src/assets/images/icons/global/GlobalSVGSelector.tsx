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
          width="48"
          height="48"
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
    case "rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.218 32.926L12.118 37.924C11.798 38.688 12.156 39.568 12.92 39.888C13.684 40.208 14.564 39.85 14.884 39.086L16.984 34.088C17.304 33.324 16.946 32.444 16.182 32.124C15.418 31.804 14.538 32.162 14.218 32.926ZM30.218 32.926L28.118 37.924C27.798 38.688 28.156 39.568 28.92 39.888C29.684 40.208 30.564 39.85 30.884 39.086L32.984 34.088C33.304 33.324 32.946 32.444 32.182 32.124C31.418 31.804 30.538 32.162 30.218 32.926ZM22.218 30.926L20.118 35.924C19.798 36.688 20.156 37.568 20.92 37.888C21.684 38.208 22.564 37.85 22.884 37.086L24.984 32.088C25.304 31.324 24.946 30.444 24.182 30.124C23.418 29.804 22.538 30.162 22.218 30.926Z"
            fill="#66AFEB"
          />
          <path
            d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z"
            fill="url(#paint7_linear)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint7_linear"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "small_rain":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.218 32.926L14.118 37.924C13.798 38.688 14.156 39.568 14.92 39.888C15.684 40.208 16.564 39.85 16.884 39.086L18.984 34.088C19.304 33.324 18.946 32.444 18.182 32.124C17.418 31.804 16.538 32.162 16.218 32.926ZM26.218 30.926L24.118 35.924C23.798 36.688 24.156 37.568 24.92 37.888C25.684 38.208 26.564 37.85 26.884 37.086L28.984 32.088C29.304 31.324 28.946 30.444 28.182 30.124C27.418 29.804 26.538 30.162 26.218 30.926Z"
            fill="#66AFEB"
          />
          <path
            d="M14 28C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C17.518 8.68 20.946 6 25 6C29.97 6 34 10.03 34 15C34 15.47 33.964 15.93 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14Z"
            fill="url(#paint6_linear)"
          />
          <path
            d="M16 15C16 19.97 20.03 24 25 24C29.502 24 33.23 20.696 33.894 16.38C34.55 16.134 35.258 16 36 16C39.314 16 42 18.686 42 22C42 25.314 39.314 28 36 28H14C9.582 28 6 24.418 6 20C6 15.582 9.582 12 14 12C14.834 12 15.636 12.128 16.392 12.364C16.136 13.198 16 14.082 16 15Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint6_linear"
              x1="24"
              y1="6"
              x2="24"
              y2="28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.7539 -24.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "small_rain_sun":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8 32 8C27.5817 8 24 11.5817 24 16C24 20.4183 27.5817 24 32 24Z"
            fill="url(#paint5_linear)"
          />
          <path
            d="M30.96 1.45999L31.48 4.41399C31.828 6.38399 28.872 6.90399 28.526 4.93399L28.006 1.97999C27.658 0.00998566 30.614 -0.510014 30.96 1.45999ZM41.546 4.98199L39.826 7.43999C38.678 9.07799 36.222 7.35799 37.368 5.71999L39.088 3.26199C40.236 1.62399 42.692 3.34399 41.546 4.98199ZM20.984 6.45399L23.442 8.17399C25.08 9.32199 23.36 11.778 21.722 10.632L19.264 8.91199C17.626 7.76399 19.346 5.30799 20.984 6.45399ZM42.282 21.366L44.74 23.086C46.378 24.234 44.658 26.69 43.02 25.544L40.562 23.824C38.924 22.676 40.644 20.22 42.282 21.366ZM46.542 14.958L43.588 15.478C41.618 15.826 41.098 12.87 43.068 12.524L46.022 12.004C47.992 11.656 48.512 14.612 46.542 14.958Z"
            fill="#FFB300"
          />
          <path
            d="M14.218 38.926L12.118 43.924C11.798 44.688 12.156 45.568 12.92 45.888C13.684 46.208 14.564 45.85 14.884 45.086L16.984 40.088C17.304 39.324 16.946 38.444 16.182 38.124C15.418 37.804 14.538 38.162 14.218 38.926ZM24.218 36.926L22.118 41.924C21.798 42.688 22.156 43.568 22.92 43.888C23.684 44.208 24.564 43.85 24.884 43.086L26.984 38.088C27.304 37.324 26.946 36.444 26.182 36.124C25.418 35.804 24.538 36.162 24.218 36.926Z"
            fill="#66AFEB"
          />
          <path
            d="M12 34C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C15.518 14.68 18.946 12 23 12C27.97 12 32 16.03 32 21C32 21.47 31.964 21.93 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12Z"
            fill="url(#paint1_linear)"
          />
          <path
            d="M14 21C14 25.97 18.03 30 23 30C27.502 30 31.23 26.696 31.894 22.38C32.55 22.134 33.258 22 34 22C37.314 22 40 24.686 40 28C40 31.314 37.314 34 34 34H12C7.582 34 4 30.418 4 26C4 21.582 7.582 18 12 18C12.834 18 13.636 18.128 14.392 18.364C14.136 19.198 14 20.082 14 21Z"
            fill="url(#paint2_radial)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="40"
              y1="8"
              x2="28.7832"
              y2="19.0723"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFB301" />
              <stop offset="1" stopColor="#FFC533" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="22"
              y1="12"
              x2="22"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(15.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "mainly_cloudy":
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.32"
            d="M38 28C41.314 28 44 25.314 44 22C44 18.686 41.314 16 38 16H37.938C37.978 15.672 38 15.338 38 15C38 10.582 34.418 7 30 7C26.5 7 23.524 9.248 22.44 12.378C21.67 12.132 20.852 12 20 12C15.582 12 12 15.582 12 20C12 24.418 15.582 28 20 28C20.69 28 21.36 27.912 22 27.748V28H38Z"
            fill="#73A5E6"
          />
          <path
            d="M12 38C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C15.518 18.68 18.946 16 23 16C27.97 16 32 20.03 32 25C32 25.47 31.964 25.93 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M14 25C14 29.97 18.03 34 23 34C27.502 34 31.23 30.696 31.894 26.38C32.55 26.134 33.258 26 34 26C37.314 26 40 28.686 40 32C40 35.314 37.314 38 34 38H12C7.582 38 4 34.418 4 30C4 25.582 7.582 22 12 22C12.834 22 13.636 22.128 14.392 22.364C14.136 23.198 14 24.082 14 25Z"
            fill="url(#paint1_radial)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="22"
              y1="16"
              x2="22"
              y2="38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9FC7FF" />
              <stop offset="1" stopColor="#9BC1F5" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9439 -22.6966) rotate(-90) scale(20.9574 6.69705)"
            >
              <stop stopColor="#486DA8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#486DA8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      );
    case "close":
      return (
        <svg
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 64 64"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style></style>
          </defs>
          <title />
          <path
            fill="#ffb300"
            d="M24,42a2,2,0,0,1-1.41-3.42l16-16a2,2,0,0,1,2.83,2.83l-16,16A2,2,0,0,1,24,42Z"
          />
          <path
            fill="#ffb300"
            d="M40,42a2,2,0,0,1-1.42-.59l-16-16a2,2,0,0,1,2.83-2.83l16,16A2,2,0,0,1,40,42Z"
          />
          <path
            fill="#0074ff"
            d="M45.67,57.68H18.33a2,2,0,0,1-1.73-1L2.93,33a2,2,0,0,1,0-2L16.6,7.32a2,2,0,0,1,1.73-1H45.67a2,2,0,0,1,1.73,1L61.07,31a2,2,0,0,1,0,2l-5.34,9.26a2,2,0,0,1-3.47-2L57,32,44.52,10.32h-25L7,32,19.48,53.68h25L47,49.41a2,2,0,0,1,3.46,2l-3,5.27A2,2,0,0,1,45.67,57.68Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default GlobalSVGSelector;
