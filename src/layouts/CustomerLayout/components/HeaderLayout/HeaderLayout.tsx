import { Layout, Menu, Space } from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import React from "react";

const { Header } = Layout;

const HeaderLayout: React.FC<any> = (props) => {
  const HeaderMenu: ItemType[] = [
    {
      title: "",
    },
  ];
  return (
    <Header>
      <div className="flex justify-end">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </div>
      <div className="logo" />
    </Header>
  );
};

export default HeaderLayout;
