import { Layout, theme } from "antd";
import React from "react";
import { FooterLayout, HeaderLayout } from "./components";

const { Content } = Layout;

type CustomerLayoutProps = {
  children: React.ReactElement;
};

const CustomerLayout: React.FC<CustomerLayoutProps> = (props) => {
  const { children }: CustomerLayoutProps = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">
      <HeaderLayout />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <FooterLayout />
    </Layout>
  );
};

export default CustomerLayout;
