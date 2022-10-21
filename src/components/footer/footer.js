import { Button, Col, Row, Layout } from "antd";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <div>
        <b>Build Proudly By: </b>
      </div>
      <Row align="middle" gutter={10}>
        <Col>
          <div>Muhamad Irfan Maulana @2022 | </div>
        </Col>
        <Col>
          <Button
            className="primaryButton"
            size="small"
            shape="circle"
            style={{ marginRight: 5 }}
            icon={<i className="bx bx-fw bxl-linkedin" />}
            href="https://www.linkedin.com/in/muhamadirfanm134/"
            target="_blank"
          />
          <Button
            className="primaryButton"
            size="small"
            shape="circle"
            icon={<i className="bx bx-fw bxl-github" />}
            href="https://github.com/Muhamadirfanm134"
            target="_blank"
          />
        </Col>
      </Row>
    </Footer>
  );
};

export default Footer;
