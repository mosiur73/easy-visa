"use client"

import { Layout, Row, Col, Typography, Space } from "antd"
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  GlobalOutlined,
} from "@ant-design/icons"
import Link from "next/link"

const { Footer } = Layout
const { Text, Title } = Typography

export function AppFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#0f172a", // Dark background
        padding: "50px 24px",
        borderTop: "2px solid #0891b2",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Row gutter={[32, 32]}>
          {/* Logo & About */}
          <Col xs={24} md={8}>
            <Space align="center">
              <GlobalOutlined style={{ fontSize: "32px", color: "#0891b2" }} />
              <Title level={4} style={{ margin: 0, color: "#0891b2" }}>
                VisaPortal
              </Title>
            </Space>
            <Text style={{ display: "block", marginTop: "12px", color: "#d1d5db" }}>
              Your trusted partner for hassle-free visa <br /> application, tracking,
              and support. We simplify <br /> your journey abroad.
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "#0891b2" }}>
              Quick Links
            </Title>
            <Space direction="vertical">
              <Link href="/" style={{ color: "#d1d5db" }}>
                Home
              </Link>
              <Link href="/services" style={{ color: "#d1d5db" }}>
                Visa Services
              </Link>
              <Link href="/application" style={{ color: "#d1d5db" }}>
                My Application
              </Link>
              <Link href="/track" style={{ color: "#d1d5db" }}>
                Track Status
              </Link>
              <Link href="/contact" style={{ color: "#d1d5db" }}>
                Contact
              </Link>
            </Space>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: "#0891b2" }}>
              Contact Us
            </Title>
            <Text style={{ color: "#d1d5db" }}>📍 Dhaka, Bangladesh</Text>
            <br />
            <Text style={{ color: "#d1d5db" }}>📞 +880 123 456 789</Text>
            <br />
            <Text style={{ color: "#d1d5db" }}>✉️ support@visaportal.com</Text>
          </Col>

          {/* Social Media */}
          <Col xs={24} md={4}>
            <Title level={5} style={{ color: "#0891b2" }}>
              Follow Us
            </Title>
            <Space size="large">
              <a href="#" target="_blank" rel="noreferrer">
                <FacebookFilled style={{ fontSize: "28px", color: "#38bdf8" }} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <TwitterSquareFilled style={{ fontSize: "28px", color: "#38bdf8" }} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <LinkedinFilled style={{ fontSize: "28px", color: "#38bdf8" }} />
              </a>
            </Space>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "32px",
            borderTop: "1px solid #1e293b",
            paddingTop: "16px",
            textAlign: "center",
          }}
        >
          <Text style={{ color: "#9ca3af" }}>
            © {new Date().getFullYear()} VisaPortal. All rights reserved.
          </Text>
        </div>
      </div>
    </Footer>
  )
}
