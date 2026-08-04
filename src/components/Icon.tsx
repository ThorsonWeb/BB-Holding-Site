interface IconProps {
  name: string;
  className?: string;
  fill?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

export default function Icon({ name, className, fill, label, style }: IconProps) {
  const fillStyle = fill ? { fontVariationSettings: "'FILL' 1" } : undefined;

  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={{ ...fillStyle, ...style }}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": "true" })}
    >
      {name}
    </span>
  );
}
