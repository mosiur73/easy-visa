"use client"
import Head from "next/head";
import { useState, useEffect } from "react"
import { Input, Select, Card, Row, Col, Typography, Tag, Button, Space } from "antd"
import { SearchOutlined, ClockCircleOutlined, DollarOutlined, FileTextOutlined, ArrowRightOutlined } from "@ant-design/icons"
import Image from "next/image"

const { Title, Text, Paragraph } = Typography
const { Option } = Select

interface VisaService {
  id: number
  name: string
  description: string
  processingTime: string
  category: string
  price: string
  requirements: string[]
  image: string
}

export default function VisaServicesPage() {
  const [services, setServices] = useState<VisaService[]>([])
  const [filteredServices, setFilteredServices] = useState<VisaService[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        console.log("[v0] Fetching visa services from /data/visa-services.json")
        const response = await fetch("/data/visa-services.json")
        console.log("[v0] Response status:", response.status)
        console.log("[v0] Response headers:", response.headers)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const text = await response.text()
        console.log("[v0] Response text (first 100 chars):", text.substring(0, 100))

        const data = JSON.parse(text)
        console.log("[v0] Parsed data:", data)
        setServices(data)
        setFilteredServices(data)
        setLoading(false)
      } catch (error) {
        console.error("[v0] Error fetching visa services:", error)
        setServices([])
        setFilteredServices([])
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  useEffect(() => {
    let filtered = services

    if (searchTerm) {
      filtered = filtered.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((service) => service.category === selectedCategory)
    }

    setFilteredServices(filtered)
  }, [searchTerm, selectedCategory, services])

  const categories = ["all", ...Array.from(new Set(services.map((service) => service.category)))]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Tourism: "blue",
      Business: "green",
      Education: "purple",
      Employment: "orange",
      Transit: "cyan",
      Family: "pink",
      Medical: "red",
      Investment: "gold",
    }
    return colors[category] || "default"
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
       <Head>
        <title> Visa Services</title>
        <meta name="description" content="Browse available visa services, view processing times, and requirements." />
      </Head>
      {/* Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
          padding: "60px 0",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <Title level={1} style={{ color: "white", marginBottom: "16px", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Our Visa Services
          </Title>
          <Paragraph
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: "18px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Comprehensive visa solutions tailored to your travel needs. From tourist visas to business permits, we
            provide expert guidance and fast processing.
          </Paragraph>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        <Row gutter={[16, 16]} style={{ marginBottom: "40px" }}>
          <Col xs={24} md={16}>
            <Input
              size="large"
              placeholder="Search visa services..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col xs={24} md={8}>
            <Select
              size="large"
              value={selectedCategory}
              onChange={setSelectedCategory}
              style={{ width: "100%", borderRadius: "8px" }}
              placeholder="Filter by category"
            >
              <Option value="all">All Categories</Option>
              {categories.slice(1).map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>

        {/* Results Count */}
        <div style={{ marginBottom: "24px" }}>
          <Text style={{ fontSize: "16px", color: "#666" }}>
            Showing {filteredServices.length} of {services.length} services
          </Text>
        </div>

        {/* Services Grid */}
        <Row gutter={[24, 24]}>
          {filteredServices.map((service) => (
            <Col xs={24} sm={12} lg={8} key={service.id}>
              <Card
                hoverable
                loading={loading}
                cover={
                  <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      style={{ objectFit: "cover" }}
                       priority 
                    />
                  </div>
                }
                style={{
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                styles={{ body: { padding: "24px" } }}
              >
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                      }}
                    >
                      <Title level={4} style={{ margin: 0, fontSize: "20px" }}>
                        {service.name}
                      </Title>
                      <Tag color={getCategoryColor(service.category)} style={{ marginLeft: "8px" }}>
                        {service.category}
                      </Tag>
                    </div>
                    <Paragraph
                      style={{
                        color: "#666",
                        marginBottom: "16px",
                        fontSize: "14px",
                        lineHeight: "1.5",
                      }}
                      ellipsis={{ rows: 3 }}
                    >
                      {service.description}
                    </Paragraph>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <Space direction="vertical" size="small" style={{ width: "100%" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <ClockCircleOutlined style={{ color: "#1890ff" }} />
                        <Text strong>Processing: {service.processingTime}</Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <DollarOutlined style={{ color: "#52c41a" }} />
                        <Text strong style={{ color: "#52c41a" }}>
                          Starting from {service.price}
                        </Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <FileTextOutlined style={{ color: "#fa8c16" }} />
                        <Text type="secondary">{service.requirements.length} requirements</Text>
                      </div>
                    </Space>

                    {/* <Button
                      type="primary"
                      size="large"
                      block
                      style={{
                        marginTop: "16px",
                        borderRadius: "8px",
                        background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
                        border: "none",
                      }}
                    >
                      Apply Now
                    </Button> */}
                     <div className="flex  gap-6 pt-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/90" >
                        Apply Now
                        <ArrowRightOutlined className="ml-2 h-4 w-4" />
                      </Button>
                      <Button className="" >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results Message */}
        {filteredServices.length === 0 && !loading && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <Title level={3} style={{ color: "#999" }}>
              No services found
            </Title>
            <Text style={{ color: "#666" }}>
              Try adjusting your search terms or filters to find what youre looking for.
            </Text>
          </div>
        )}
      </div>
      
    </div>
  )
}
