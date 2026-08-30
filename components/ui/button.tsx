import * as React from "react";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "ghost"
    | "danger";

type ButtonSize =
    | "sm"
    | "md"
    | "lg";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            loading = false,
            disabled,
            className = "",
            ...props
        },
        ref
    ) => {
        const variants: Record<ButtonVariant, string> = {
            primary:
                "bg-[#9f936b] text-[#12120f] hover:bg-[#b5a66f]",

            secondary:
                "border border-white/15 bg-[#101113] text-[#aaa49a] hover:border-[#9f936b]/60 hover:text-white",

            ghost:
                "bg-transparent text-[#aaa49a] hover:bg-white/5 hover:text-white",

            danger:
                "bg-red-900/80 text-white hover:bg-red-800",
        };

        const sizes: Record<ButtonSize, string> = {
            sm: "px-4 py-2 text-xs",
            md: "px-6 py-3.5 text-sm",
            lg: "px-8 py-4 text-sm",
        };

        return (
            <button
                ref={ref}
                disabled={disabled || loading}
                className={`
          inline-flex
          items-center
          justify-center
          gap-2
          uppercase
          tracking-[0.2em]
          transition
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
                {...props}
            >
                {loading ? (
                    <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <span>Loading</span>
                    </>
                ) : (
                    children
                )}
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
