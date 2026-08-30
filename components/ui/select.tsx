import * as React from "react";

interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
    label?: string;
    error?: string;
    hint?: string;
    options: SelectOption[];
    placeholder?: string;
}

export function Select({
    label,
    error,
    hint,
    options,
    placeholder,
    id,
    className = "",
    ...props
}: SelectProps) {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={selectId}
                    className="text-sm font-medium text-zinc-200"
                >
                    {label}
                </label>
            )}

            <select
                id={selectId}
                className={`
          w-full rounded-lg border bg-zinc-900 px-3 py-2.5
          text-sm text-zinc-100 outline-none
          transition
          focus:ring-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${error
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        : "border-zinc-700 focus:border-amber-500 focus:ring-amber-500/20"
                    }
          ${className}
        `}
                aria-invalid={!!error}
                aria-describedby={
                    error
                        ? `${selectId}-error`
                        : hint
                            ? `${selectId}-hint`
                            : undefined
                }
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p id={`${selectId}-error`} className="text-xs text-red-400">
                    {error}
                </p>
            )}

            {!error && hint && (
                <p id={`${selectId}-hint`} className="text-xs text-zinc-500">
                    {hint}
                </p>
            )}
        </div>
    );
}