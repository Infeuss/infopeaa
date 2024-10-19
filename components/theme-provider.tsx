"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { SafeLinkContextProvider, SafeLinkData } from "./safeLinkContext"

export function ThemeProvider({ children, ...props }: ThemeProviderProps & { initialData: Partial<SafeLinkData> }) {
  return (
    <SafeLinkContextProvider initialData={props.initialData as SafeLinkData}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </SafeLinkContextProvider>
  )
}
