export const icon = {

};

export type IconType = typeof icon;
export type IconVariant = "blue" | "white"

interface IconProps {
  className?: string;
  variant?: IconVariant;
  name: keyof IconType;
}



export default function Icon(props: IconProps) {
  const { variant = "blue", name, className = "" } = props;

  return (
    <span
      className={`icon ${variant ? variant : ''} ${className}`}
    >
      {icon[name]}
    </span>
  );
}

