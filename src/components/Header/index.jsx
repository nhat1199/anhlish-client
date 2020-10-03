import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const style = {
  textAlign: "center",
  backgroundColor: "cornflowerblue",
  color: "white",
};
const handleClick = (event) => {
  console.log("event:", event);
};
function Header(props) {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 374px)' })
  const itemClasname =  isSmallScreen?"d-flex align-items-center text-dark": "d-flex align-items-center text-white";
  console.log(itemClasname);
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
      <Menu.Item key="about" >
        <div className={itemClasname}>
          
          <MailOutlined />
          About AnhLish
        </div>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
