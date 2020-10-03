import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined, HomeOutlined
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
        <Menu.Item key="home" >
          <div className="d-flex align-items-center">
             <HomeOutlined />
        <Link to="/home">Home</Link>
          </div>
       
      </Menu.Item>
      <Menu.Item key="app">
      <div className="d-flex align-items-center">
      <AppstoreOutlined />
        <Link to="/learning">Learning</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="mail">
      <div className="d-flex align-items-center">
      <MailOutlined />
        About AnhLish
        </div>
      </Menu.Item>

      {/* <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Setting">
        
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu> */}
       
    </Menu>
  );
}

export default Header;
