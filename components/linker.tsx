import Link from "next/link";
import React, {HTMLAttributeAnchorTarget} from "react";
import {cn} from "@/lib/utils";

interface LinkerProps {
    href: string;
    text: string;
    className?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
}

export function Linker(props: LinkerProps) {
    return <>
        <Link href={props.href} target={props.target}
              className={cn("underline underline-offset-4 hover:opacity-80", props.className)}>
            <span>{props.text}</span>
        </Link>
    </>
}
