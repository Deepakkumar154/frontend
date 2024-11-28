import React, {FC} from "react";
import {Input, Typography} from "@material-tailwind/react";

interface TextBoxProps {
    name: string;
    label: string;
    value: string|undefined;
    placeholder: string;
    isDisabled?: boolean;
    type?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextBox: FC<TextBoxProps> = ({name,label, value, type, placeholder,isDisabled, handleChange}) => {
    return (
        <div className="w-full">
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
            >
                {label}
            </Typography>
            <Input
                color="gray"
                size="lg"
                placeholder={placeholder}
                name={name}
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                value={value}
                type={type}
                disabled={isDisabled}
                labelProps={{
                    className: "hidden",
                }}
                onChange={handleChange}
                containerProps={{
                    className: "!min-w-full",
                }}
            />
        </div>
    );
}
