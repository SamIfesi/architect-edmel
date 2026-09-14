export function ArchitectureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 34V14l8-6 8 6v20M8 34h16M8 22h8M28 34V20l6-4v18M28 34h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InteriorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="16"
        width="12"
        height="10"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="10" cy="20" r="1.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 24h12" stroke="currentColor" strokeWidth="1.2" />
      <rect
        x="22"
        y="14"
        width="12"
        height="14"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M25 20l3-3 3 3M25 24h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PropertyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 34V12l6-4 6 4v22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 34h12M13 34V16M19 34V16M25 18l7-4v20h-7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8v8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EngineeringIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 28c4-8 8-12 12-12s8 4 12 12M4 28h24M10 22V12M22 22V16M6 28v4M20 28v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 7h8M8 3.5L11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
