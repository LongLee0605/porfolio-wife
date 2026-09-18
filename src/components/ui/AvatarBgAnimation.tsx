"use client";

import { useId, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type AvatarBgAnimationProps = {
  className?: string;
};

export function AvatarBgAnimation({ className }: AvatarBgAnimationProps) {
  const uid = useId().replace(/:/g, "");
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const path0 = `${uid}-path_0`;
  const path1 = `${uid}-path_1`;
  const path2 = `${uid}-path_2`;
  const paint0 = `${uid}-paint0`;
  const paint1 = `${uid}-paint1`;
  const paint2 = `${uid}-paint2`;
  const paint3 = `${uid}-paint3`;
  const paint4 = `${uid}-paint4`;
  const paint5 = `${uid}-paint5`;
  const paint6 = `${uid}-paint6`;
  const paint7 = `${uid}-paint7`;
  const paint11 = `${uid}-paint11`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 602 602"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.22">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
            stroke={`url(#${paint0})`}
            id={path0}
          />
          <path
            d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
            stroke={`url(#${paint1})`}
            id={path1}
          />
          <path
            d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
            stroke={`url(#${paint2})`}
            id={path2}
          />
        </g>

        {!reduceMotion && (
          <>
            <ellipse
              cx="295.027"
              cy="193.118"
              transform="translate(-295.027 -193.118)"
              rx="1.5"
              ry="1.5"
              fill="#9ec9f5"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path2}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M294.685 193.474L268.932 219.258"
              transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
              stroke={`url(#${paint3})`}
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path2}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="295.027"
              cy="193.118"
              transform="translate(-295.027 -193.118)"
              rx="1.5"
              ry="1.5"
              fill="#3d8fd4"
            >
              <animateMotion
                dur="5s"
                begin="1s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path2}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M294.685 193.474L268.932 219.258"
              transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
              stroke={`url(#${paint7})`}
            >
              <animateMotion
                dur="5s"
                begin="1s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path2}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="476.525"
              cy="363.313"
              rx="1.5"
              ry="1.5"
              transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
              fill="#9ec9f5"
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path0}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M476.171 362.952L450.417 337.168"
              transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
              stroke={`url(#${paint4})`}
            >
              <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path0}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="382.164"
              cy="155.029"
              rx="1.5"
              ry="1.5"
              transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
              fill="#0958a7"
            >
              <animateMotion
                dur="10s"
                begin="1s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M381.81 154.669L356.057 128.885"
              transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
              stroke={`url(#${paint5})`}
            >
              <animateMotion
                dur="10s"
                begin="1s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="333.324"
              cy="382.691"
              rx="1.5"
              ry="1.5"
              transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
              fill="#3d8fd4"
            >
              <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path1}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M333.667 382.335L359.42 356.551"
              transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
              stroke={`url(#${paint6})`}
            >
              <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${path1}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="165.524"
              cy="93.9596"
              rx="1.5"
              ry="1.5"
              transform="translate(-165.524 -93.9596)"
              fill="#3d8fd4"
            >
              <animateMotion
                dur="10s"
                begin="3s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M165.182 94.3159L139.429 120.1"
              transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
              stroke={`url(#${paint7})`}
            >
              <animateMotion
                dur="10s"
                begin="3s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </path>

            <ellipse
              cx="476.525"
              cy="363.313"
              rx="1.5"
              ry="1.5"
              transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
              fill="#9ec9f5"
            >
              <animateMotion
                dur="12s"
                begin="4s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </ellipse>
            <path
              d="M476.171 362.952L450.417 337.168"
              transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
              stroke={`url(#${paint11})`}
            >
              <animateMotion
                dur="12s"
                begin="4s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${path0}`} />
              </animateMotion>
            </path>
          </>
        )}

        <defs>
          <radialGradient
            id={paint0}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#0958a7" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id={paint1}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#0958a7" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id={paint2}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(301 301) rotate(90) scale(300)"
          >
            <stop offset="0.333333" stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#0958a7" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={paint3}
            x1="295.043"
            y1="193.116"
            x2="269.975"
            y2="218.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#9ec9f5" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={paint4}
            x1="476.529"
            y1="363.31"
            x2="451.461"
            y2="338.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#9ec9f5" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={paint5}
            x1="382.168"
            y1="155.027"
            x2="357.1"
            y2="129.989"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0958a7" />
            <stop offset="1" stopColor="#0958a7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={paint6}
            x1="333.309"
            y1="382.693"
            x2="358.376"
            y2="357.655"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3d8fd4" />
            <stop offset="1" stopColor="#3d8fd4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={paint7}
            x1="165.54"
            y1="93.9578"
            x2="140.472"
            y2="118.996"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3d8fd4" />
            <stop offset="1" stopColor="#3d8fd4" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id={paint11}
            x1="476.529"
            y1="363.31"
            x2="451.461"
            y2="338.272"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9ec9f5" />
            <stop offset="1" stopColor="#9ec9f5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
