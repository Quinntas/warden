import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google"
import "./globals.css";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/lib/providers/theme-provider";
import {Toaster} from "@/components/ui/sonner"
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import Cursor from "@/components/cursor";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: {
        default: "Warden",
        template: "%s - Warden"
    },
    description: "Warden provides high quality courses for developers and designers. Learn from the best and improve your skills.",
    robots: {
        follow: true,
        index: true,
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >

            {children}
            <Cursor/>
            <Toaster/>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
