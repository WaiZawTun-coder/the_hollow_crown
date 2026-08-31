import Link from "next/link";
import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helper?: {
        element: string | React.ReactNode;
        href?: string
    }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helper, className = "", id, ...props }, ref) => {
        const generatedId = React.useId();
        const inputId = id ?? generatedId;

        return (
            <div className="w-full">
                {(label || helper) && (
                    <div className="flex justify-between">
                        {label &&
                            <label
                                htmlFor={inputId}
                                className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#77736b]"
                            >
                                {label}
                            </label>
                        }

                        {helper &&
                            <Link href={helper?.href || ""} className="mb-2 block text-xs uppercase tracking-[0.2em] text-[#377736b]">
                                {helper.element}
                            </Link>
                        }
                    </div>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={`w-full border bg-[#101113] px-4 py-3.5 text-sm text-[#ddd7ca] outline-none placeholder:text-[#4f4d48] transition
                            ${error
                            ? "border-red-900/70 focus:border-red-700"
                            : "border-white/10 focus:border-[#9f936b]/60"
                        }
                            ${className}
                            `}
                    {...props}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />

                {error && (
                    <p
                        id={`${id}-error`}
                        className="mt-2 text-xs text-red-500">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input };