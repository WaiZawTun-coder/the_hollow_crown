import * as React from "react";

interface RadioOption {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
}

interface RadioGroupProps {
    name: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    options: RadioOption[];
    error?: string;
    direction?: "row" | "column";
    className?: string;
}

export function RadioGroup({
    name,
    label,
    value,
    onChange,
    options,
    error,
    direction = "column",
    className = "",
}: RadioGroupProps) {
    const groupId = React.useId();

    return (
        <fieldset
            className={`flex w-full flex-col gap-3 ${className}`}
            aria-invalid={!!error}
        >
            {label && (
                <legend className="text-sm font-medium text-zinc-200">
                    {label}
                </legend>
            )}

            <div
                className={
                    direction === "row"
                        ? "flex flex-wrap gap-3"
                        : "flex flex-col gap-3"
                }
            >
                {options.map((option) => {
                    const optionId = `${groupId}-${option.value}`;
                    const checked = value === option.value;

                    return (
                        <label
                            key={option.value}
                            htmlFor={optionId}
                            className={`
                flex cursor-pointer items-start gap-3 rounded-lg border
                p-3 transition
                ${checked
                                    ? "border-amber-500 bg-amber-500/10"
                                    : "border-zinc-700 bg-zinc-900 hover:border-zinc-600"
                                }
                ${option.disabled
                                    ? "cursor-not-allowed opacity-50"
                                    : ""
                                }
              `}
                        >
                            <input
                                id={optionId}
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={checked}
                                disabled={option.disabled}
                                onChange={() => onChange?.(option.value)}
                                className="mt-1 h-4 w-4 accent-amber-500"
                            />

                            <span className="flex flex-col">
                                <span className="text-sm font-medium text-zinc-100">
                                    {option.label}
                                </span>

                                {option.description && (
                                    <span className="mt-1 text-xs text-zinc-500">
                                        {option.description}
                                    </span>
                                )}
                            </span>
                        </label>
                    );
                })}
            </div>

            {error && (
                <p className="text-xs text-red-400">
                    {error}
                </p>
            )}
        </fieldset>
    );
}
