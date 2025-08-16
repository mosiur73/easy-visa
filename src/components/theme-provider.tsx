"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { ConfigProvider, theme } from "antd"

type Theme = "light" | "dark"

type ThemeProviderContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme)
    document.documentElement.style.colorScheme = currentTheme
    localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeProviderContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ConfigProvider
        theme={{
          algorithm: currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: "#0891b2",
            colorSuccess: "#10b981",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
