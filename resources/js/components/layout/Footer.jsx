/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just mt-8">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
            © 2023, all rights reserved by
            <a href="https://flexibleit.net" className="font-weight-bold" target="_blank">
              Flexible It
            </a>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              <li className="nav-item">
                <a
                  href="https://flexibleit.net"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Flexible It
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about-us"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://shareideas.info"
                  className="nav-link text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/privacy-policy"
                  className="nav-link pe-0 text-muted"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
