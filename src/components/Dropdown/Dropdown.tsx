import React, {FC} from "react";
import {Option, Select, Typography} from "@material-tailwind/react";

interface TextBoxProps {
    name: string;
    label: string;
    options: string[];
    value: string|undefined;
    handleOptionChange: (name: string, value: string) => void;
}

export const Dropdown: FC<TextBoxProps> = ({name, label, options,value, handleOptionChange}) => {
    return (
        <div className="w-full">
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-bold"
            >
                {label}
            </Typography>
            <Select
                size="lg"
                labelProps={{
                    className: "hidden",
                }}
                name={name}
                value={value}
                onChange={(value) => handleOptionChange(name, value)}
                className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
            >
                {options.map(optionValue => {
                    return <Option value={optionValue}>{optionValue}</Option>
                })}
            </Select>
        </div>
    );
}
