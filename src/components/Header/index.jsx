import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const style = {
  textAlign: "center",
  backgroundColor: "cornflowerblue",
  color: "white",
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
      <Menu.Item key="home">
        <div className="d-flex align-items-center text-white">
          <HomeOutlined />
          <Link to="/home" className="text-white">Home</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="app">
        <div className="d-flex align-items-center text-white">
          <AppstoreOutlined />
          <Link to="/learning/import-content" className="text-white">Learning</Link>
        </div>
      </Menu.Item>
      <Menu.Item key="mail">
        <div className="d-flex align-items-center text-white">
          <MailOutlined />
          About AnhLish
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
