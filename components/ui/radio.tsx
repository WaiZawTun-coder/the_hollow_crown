"use client";

import * as React from "react";

interface RadioProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
}

export function Radio({
    label,
    id,
    className = "",
    ...props
}: RadioProps) {
    const generatedId = React.useId();
    const radioId = id ?? generatedId;

    return (
        <label
            htmlFor={radioId}
            className="inline-flex cursor-pointer items-center gap-2"
        >
            <input
                {...props}
                id={radioId}
                type="radio"
                className={`
          h-4 w-4
          accent-amber-500
          focus:ring-2
          focus:ring-amber-500/30
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className}
        `}
            />

            {label && (
                <span className="text-sm text-zinc-200">
                    {label}
                </span>
            )}
        </label>
    );
}
