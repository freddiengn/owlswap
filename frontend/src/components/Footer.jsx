// components/Footer.jsx
import React from "react";
import { Layout, Row, Col, Typography, Input, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter
      style={{
        backgroundColor: "#001529",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <Row gutter={[16, 16]} justify="center">
        {/* About Section */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            About Us
          </Title>
          <Text style={{ color: "#fff" }}>
          Welcome to OwlSwap, the trusted marketplace for Temple University students. 

          </Text>
        </Col>

        {/* Quick Links */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <a href="/" style={{ color: "#fff" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: "#fff" }}>
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" style={{ color: "#fff" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" style={{ color: "#fff" }}>
                FAQ
              </a>
            </li>
          </ul>
        </Col>

        {/* Contact Information */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Contact Us
          </Title>
          <p>
            <MailOutlined /> support@owlswap.com
          </p>
          <p>
            <PhoneOutlined /> (+81) 70-8976-8822
          </p>
          <p>1 Chome-14-29 Taishido, Setagaya City, Tokyo 154-0004</p>
        </Col>

        {/* Newsletter Subscription */}
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: "#fff" }}>
            Subscribe to Our Newsletter
          </Title>
          <Input
            placeholder="Enter your email"
            style={{ marginBottom: "10px" }}
            suffix={<MailOutlined />}
          />
          <Button type="primary" block>
            Subscribe
          </Button>
        </Col>
      </Row>

      {/* Social Media Links */}
      <Row justify="center" style={{ marginTop: "40px", textAlign: "center" }}>
        <Col>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlined
              style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterOutlined
              style={{ fontSize: "24px", color: "#fff", marginRight: "10px" }}
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={{ fontSize: "24px", color: "#fff" }} />
          </a>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col>
          <Text style={{ color: "#fff" }}>
            © 2024 Owl Swap. All rights reserved.
          </Text>
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;