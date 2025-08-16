"use client"

import { Typography, Button, Row, Col, Card } from "antd"
import { FileTextOutlined, SafetyCertificateOutlined, UserOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

export function HeroSection() {
  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, rgba(63, 81, 181, 0.9) 0%, rgba(103, 58, 183, 0.9) 100%)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url('https://i.ibb.co.com/1GgTSZJS/jumbo-jet-flying-sky.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(63, 81, 181, 0.65) 0%, rgba(103, 58, 183, 0.65) 100%)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "80px 24px 40px",
            textAlign: "center",
          }}
        >
          <Paragraph
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "0 0 24px 0",
            }}
          >
            WELCOME TO FASTWAY
          </Paragraph>

          <Title
            level={1}
            style={{
              color: "white",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              margin: "0 0 24px 0",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We Are The Most Trusted Visa and Immigration Consultant
          </Title>

          <Paragraph
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "16px",
              lineHeight: 1.6,
              margin: "0 0 40px 0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Professional Trusted Visa Consultant Services with over 15 years of experience helping clients achieve their
            immigration goals. We provide expert guidance and support throughout your entire immigration journey.
          </Paragraph>

          <div
            style={{ marginBottom: "40px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#ff9800",
                borderColor: "#ff9800",
                color: "white",
                padding: "12px 32px",
                height: "auto",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "4px",
                textTransform: "uppercase",
                minWidth: "120px",
              }}
            >
              CONTACT
            </Button>
            <Button
              size="large"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "white",
                padding: "12px 32px",
                height: "auto",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "4px",
                textTransform: "uppercase",
                minWidth: "120px",
              }}
            >
              MORE
            </Button>
          </div>
        </div>
      </section>

      <div
        style={{
          position: "relative",
          zIndex: 4,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          marginTop: "clamp(-120px, -15vw, -60px)",
          padding: "0 16px",
        }}
      >
        <Row gutter={[16, 24]} justify="center">
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card
              style={{
                textAlign: "center",
                padding: "clamp(16px, 3vw, 32px) clamp(12px, 2.5vw, 24px)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                height: "100%",
                minHeight: "clamp(160px, 25vw, 200px)",
              }}
            >
              <FileTextOutlined
                style={{
                  fontSize: "clamp(28px, 5vw, 48px)",
                  color: "#ff9800",
                  marginBottom: "12px",
                }}
              />
              <Title level={4} style={{ margin: "0 0 6px 0", color: "#333", fontSize: "clamp(14px, 2.2vw, 20px)" }}>
                Apply Online Visa
              </Title>
              <Paragraph style={{ color: "#666", margin: 0, fontSize: "clamp(11px, 1.8vw, 14px)" }}>
                Fast and secure online visa application process with expert guidance
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card
              style={{
                textAlign: "center",
                padding: "clamp(16px, 3vw, 32px) clamp(12px, 2.5vw, 24px)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                height: "100%",
                minHeight: "clamp(160px, 25vw, 200px)",
              }}
            >
              <SafetyCertificateOutlined
                style={{
                  fontSize: "clamp(28px, 5vw, 48px)",
                  color: "#ff9800",
                  marginBottom: "12px",
                }}
              />
              <Title level={4} style={{ margin: "0 0 6px 0", color: "#333", fontSize: "clamp(14px, 2.2vw, 20px)" }}>
                Education Permits
              </Title>
              <Paragraph style={{ color: "#666", margin: 0, fontSize: "clamp(11px, 1.8vw, 14px)" }}>
                Study abroad with our comprehensive education permit services
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card
              style={{
                textAlign: "center",
                padding: "clamp(16px, 3vw, 32px) clamp(12px, 2.5vw, 24px)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                height: "100%",
                minHeight: "clamp(160px, 25vw, 200px)",
              }}
            >
              <UserOutlined
                style={{
                  fontSize: "clamp(28px, 5vw, 48px)",
                  color: "#ff9800",
                  marginBottom: "12px",
                }}
              />
              <Title level={4} style={{ margin: "0 0 6px 0", color: "#333", fontSize: "clamp(14px, 2.2vw, 20px)" }}>
                Immigration Experts
              </Title>
              <Paragraph style={{ color: "#666", margin: 0, fontSize: "clamp(11px, 1.8vw, 14px)" }}>
                Professional immigration consultants with years of experience
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
