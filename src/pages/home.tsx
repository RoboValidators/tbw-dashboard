import React from "react";
import { Layout, Menu } from "antd";

import "./home.css";
import VoterOverview from "./VoterOverview";

const { Header, Content, Footer } = Layout;

const Home = React.memo(() => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Voters overview</Menu.Item>
          <Menu.Item key="2">Payouts</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <VoterOverview />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Robo Validators ©2020 Created by Bindie The Validator
      </Footer>
    </Layout>
  );
});

export default Home;
