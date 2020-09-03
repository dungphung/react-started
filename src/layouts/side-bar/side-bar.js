import { Layout, Menu } from "antd";

import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import { getIconType } from "../../utils";

const listMenu = [
  {
    key: 1,
    type: "PieChartOutlined",
    title: "Bảng Điều Khiển",

    to: "/",
  },
  {
    key: 2,
    type: "UsergroupAddOutlined",
    title: "Thành viên",
    to: "/users",
  },
];

const SideBars = ({ location, isCollapsed, onCollapseSidebar }) => {
  const isSelected = useCallback(() => {
    const index = listMenu.findIndex((item) => item.to === location.pathname);
    return index >= 0 ? index + 1 : 1;
  }, [location]);

  return (
    <Layout.Sider
      breakpoint="lg"
      trigger={null}
      collapsedWidth="80"
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapseSidebar}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={[`${isSelected()}`]}
        mode="inline"
      >
        {listMenu.map((item) => (
          <Menu.Item key={item.key} icon={getIconType(item.type)}>
            <Link to={item.to}>
              <span style={{ marginLeft: "10px" }}>{item.title}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(SideBars);
