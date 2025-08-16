"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Layout, Menu, Button, Drawer } from "antd"
import { GlobalOutlined, MenuOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons"
import { useTheme } from "./theme-provider"

const { Header } = Layout

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { key: "home", label: "Home", href: "/" },
    { key: "services", label: "Visa Services", href: "/services" },
    { key: "application", label: "My Application", href: "/application" },
   
  ]

  const menuItems = navItems.map((item) => ({
    key: item.key,
    label: <Link href={item.href}>{item.label}</Link>,
  }))

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: theme === "dark" ? "#001529" : "#fff",
        borderBottom: `1px solid ${theme === "dark" ? "#303030" : "#f0f0f0"}`,
        padding: "0 24px",
        height: "64px",
        lineHeight: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <GlobalOutlined style={{ fontSize: "32px", color: "#0891b2" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#0891b2" }}>VisaPortal</span>
        </div>

        <div style={{ display: !isMobile ? "flex" : "none", alignItems: "center", gap: "16px" }}>
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "16px",
              fontWeight: "500",
            }}
          />
        </div>

        <div style={{ display: !isMobile ? "flex" : "none", alignItems: "center", gap: "12px" }}>
           <Button
            type="text"
            icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
            onClick={toggleTheme}
            style={{ color: theme === "dark" ? "#fff" : "#0891b2" }}
          />
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#0891b2",
              borderColor: "#0891b2",
            }}
          >
            Apply Now
          </Button>
         
        </div>

        <div style={{ display: isMobile ? "block" : "none" }}>
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: theme === "dark" ? "#fff" : "#0891b2" }}
          />
        </div>

        <Drawer title="Navigation" placement="right" onClose={() => setIsMenuOpen(false)} open={isMenuOpen} width={280}>
          <Menu mode="vertical" items={menuItems} style={{ border: "none" }} onClick={() => setIsMenuOpen(false)} />
          <div style={{ padding: "16px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Button
              type="text"
              icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
              onClick={toggleTheme}
              style={{ justifyContent: "flex-start" }}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            <Button
              type="primary"
              block
              size="large"
              style={{
                backgroundColor: "#0891b2",
                borderColor: "#0891b2",
              }}
            >
              Apply Now
            </Button>
          </div>
        </Drawer>
      </div>
    </Header>
  )
}
