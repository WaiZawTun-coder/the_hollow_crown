"use client";

import * as React from "react";

interface CheckboxProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string | React.ReactNode;
    error?: string;
    description?: string;
}

export function Checkbox({
    label,
    error,
    description,
    id,
    className = "",
    ...props
}: CheckboxProps) {
    const generatedId = React.useId();
    const checkboxId = id ?? generatedId;

    return (
        <>
            <label
                htmlFor={checkboxId}
                className="flex cursor-pointer items-start gap-3"
            >
                <input
                    {...props}
                    id={checkboxId}
                    type="checkbox"
                    className={`
                    mt-0.5 h-4 w-4 shrink-0 rounded accent-amber-500 focus:ring-2 focus:ring-amber-500/30 disabled:cursor-not-allowed disabled:opacity-50 
                    ${className}
                    ${error
                            ? "border-red-900/70 focus:border-red-700"
                            : "border-white/10 focus:border-[#9f936b]/60"
                        }
                    `}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                />

                {(label || description) && (
                    <span className="flex flex-col">
                        {label && (
                            <span className="block text-xs uppercase tracking-[0.2em] text-[#77736b]">
                                {label}
                            </span>
                        )}

                        {description && (
                            <span className="mt-1 text-xs text-zinc-500">
                                {description}
                            </span>
                        )}
                    </span>
                )}
            </label>
            {error && (
                <p
                    id={`${id}-error`}
                    className="text-xs text-red-500">
                    {error}
                </p>
            )}
        </>
    );
}
