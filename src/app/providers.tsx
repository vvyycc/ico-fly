"use client";
import { ThemeProvider } from "next-themes";
import { MetaMaskProvider } from "metamask-react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
       
            <MetaMaskProvider>{children}</MetaMaskProvider>
    );
}

 // <ThemeProvider
        //     attribute="class"
        //     enableSystem={true}
        //     themes={["is_light", "is_dark"]}
        // >
        {/* </ThemeProvider> */}
