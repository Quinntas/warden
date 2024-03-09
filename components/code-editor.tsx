"use client"

import React from "react";

import Editor from "@monaco-editor/react";
import {useTheme} from "next-themes";


interface CodeEditorProps {
    onChange?: (value: string | undefined) => void;
    language?: string;
    code?: string;
    theme?: string;
}

export function CodeEditor(props: CodeEditorProps) {
    const theme = useTheme()

    const handleEditorChange = (value: string | undefined) => {
        props.onChange && props.onChange(value);
    };

    return (
        <>
            <Editor
                height="100%"
                width={`100%`}
                loading={<p>Loading...</p>}
                language={props.language || "typescript"}
                theme={theme.theme === "dark" ? "vs-dark" : "light"}
                defaultValue="// Type your code here!"
                onChange={(value) => handleEditorChange(value)}
            />
        </>
    );
};
