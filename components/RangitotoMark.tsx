type Props = {
  className?: string;
  title?: string;
};

export function RangitotoMark({ className = "h-8 w-20", title }: Props) {
  return (
    <svg
      viewBox="0 0 200 48"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M0 46h200C168 44 150 40 136 34 118 26 108 14 100 8 92 14 84 24 68 32 52 40 28 44 0 46Z"
        fill="currentColor"
      />
    </svg>
  );
}
