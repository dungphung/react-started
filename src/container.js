import React, { Suspense } from "react";
import { Layout } from "antd";
import { Route, Redirect } from "react-router-dom";
import Routes from "./routes";

import { SideBar } from "./layouts";

let isLogin = false;

const Container = (props) => {
  const {
    location: { pathname },
  } = props;

  //   if (pathname !== "/login" && !isLogin) {
  //     isLogin = true;
  //     return <Redirect to="/login" />;
  //   }

  return (
    <Layout className="app-wrapper-outer">
      <SideBar {...props} />
      <Layout>
        <Layout.Content style={{ margin: "20px" }}>
          {Routes.map((route) => (
            <Suspense fallback={<div>loading</div>}>
              <Route {...route} />
            </Suspense>
          ))}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Container;
