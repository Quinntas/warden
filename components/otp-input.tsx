'use client'

import {OTPInput, SlotProps} from "input-otp";
import {cn} from "@/lib/utils";

function FakeCaret() {
    return (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
            <div className="w-px h-8 bg-white"/>
        </div>
    )
}

function FakeDash() {
    return (
        <div className="flex w-10 justify-center items-center">
            <div className="w-3 h-1 rounded-full bg-border"/>
        </div>
    )
}

function Slot(props: SlotProps) {
    return (
        <div
            className={cn(
                'relative w-10 h-14 text-[2rem]',
                'flex items-center justify-center',
                'transition-all duration-300',
                'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
                'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
                'outline outline-0 outline-accent-foreground/20',
                {'outline-4 outline-accent-foreground': props.isActive},
            )}
        >
            {props.char !== null && <div>{props.char}</div>}
            {props.hasFakeCaret && <FakeCaret/>}
        </div>
    )
}


export function OtpInput() {
    return (
        <OTPInput
            maxLength={6}
            containerClassName="group flex items-center has-[:disabled]:opacity-30"
            render={({slots}) => (
                <>
                    <div className="flex">
                        {slots.slice(0, 3).map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>

                    <FakeDash/>

                    <div className="flex">
                        {slots.slice(3).map((slot, idx) => (
                            <Slot key={idx} {...slot} />
                        ))}
                    </div>
                </>
            )}
        />
    )
}