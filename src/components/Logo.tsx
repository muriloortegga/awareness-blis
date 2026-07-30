import type { SVGProps } from "react";

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 95 36"
      width="95"
      height="36"
      className={className}
      fill="none"
      {...props}
    >
      <g
        fontFamily="'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.04em"
      >
        {/* Letters "bl" */}
        <text x="0" y="27" fill="currentColor">
          bl
        </text>

        {/* Custom dotless stem for "i" */}
        <rect x="29.5" y="13.5" width="4" height="13.5" rx="0.8" fill="currentColor" />

        {/* Brand green dot for the "i" */}
        <circle cx="31.5" cy="7.5" r="2.3" fill="#1FA34A" />

        {/* Letter "s" */}
        <text x="35.5" y="27" fill="currentColor">
          s
        </text>
      </g>
    </svg>
  );
}
