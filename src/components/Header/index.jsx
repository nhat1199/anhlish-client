import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const style = {
  textAlign: "center",
};
const handleClick = (event) => {
  console.log("event:", event);
};
function Header(props) {
  return (
    <Menu
      onClick={handleClick}
      selectedKeys="nav-menu"
      mode="horizontal"
      style={style}
    >
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        <Link to="/learning">Learning</Link>
      </Menu.Item>
      <Menu.Item key="mail" icon={<MailOutlined />}>
        About AnhLish
      </Menu.Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Setting">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="key">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
