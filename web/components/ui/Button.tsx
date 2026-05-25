import Link from "next/link";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded transition-colors duration-150 cursor-pointer";

  const styles: Record<ButtonVariant, string> = {
    primary: "bg-[#E8620C] text-white hover:bg-[#CF5409]",
    ghost:
      "bg-white text-[#1C1C1C] border border-[#1C1C1C] hover:border-[#E8620C] hover:text-[#E8620C]",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} style={{ fontFamily: "Manrope, sans-serif" }}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${cls} disabled:opacity-50 disabled:cursor-not-allowed`}
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {children}
    </button>
  );
}
