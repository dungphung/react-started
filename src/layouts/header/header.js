import { Dropdown, Layout, Menu } from "antd";
import {
  LogoutOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

import React, { useCallback } from "react";

const HeaderBar = ({ onCollapseSidebar, history }) => {
  const _handleLogOut = useCallback(() => {
    history.push("/login");
  }, [history]);

  return (
    <Layout.Header
      className="app-header-bar"
      style={{ background: "#fff", padding: 0 }}
    >
      <div className="right-wrapper">
        <Dropdown
          className="header-user-info"
          overlay={
            <Menu selectedKeys={[]}>
              <Menu.Item key="logout" onClick={_handleLogOut}>
                <LogoutOutlined />
                Đăng xuất
              </Menu.Item>
            </Menu>
          }
        >
          <span className="header-user-info">
            <UserOutlined />
            <span>????</span>
          </span>
        </Dropdown>
      </div>
      <div className="left-wrapper">
        <MenuUnfoldOutlined
          className="trigger-hover"
          onClick={onCollapseSidebar}
        />
      </div>
      <div className="clearfix" />
    </Layout.Header>
  );
};

export default HeaderBar;
