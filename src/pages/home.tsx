import React, { useState } from "react";
import { Layout, Menu } from "antd";

import "./home.css";

const VoterOverview = React.lazy(() => import("./Voters"));
const TransactionsOverview = React.lazy(() => import("./Payouts"));

const { Header, Content, Footer } = Layout;

const OVERVIEW_VOTERS = "OVERVIEW_VOTERS";
const OVERVIEW_TRANSACTIONS = "OVERVIEW_TRANSACTIONS";
const OVERVIEW_KEY = "overview";

const Home = React.memo(() => {
  const [selectedOverview, setSelectedOverview] = useState(
    localStorage.getItem(OVERVIEW_KEY) || OVERVIEW_VOTERS
  );

  const handleNavigate = (event: any) => {
    setSelectedOverview(event.key);
    localStorage.setItem(OVERVIEW_KEY, event.key);
  };

  const renderOverview = () => {
    switch (selectedOverview) {
      case OVERVIEW_VOTERS:
        return <VoterOverview />;
      case OVERVIEW_TRANSACTIONS:
        return <TransactionsOverview />;
      default:
        throw new Error("Invalid tab.");
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedOverview]}
          onClick={handleNavigate}
        >
          <Menu.Item key={OVERVIEW_VOTERS}>Voters overview</Menu.Item>
          <Menu.Item key={OVERVIEW_TRANSACTIONS}>Payout history</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{renderOverview()}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Robo Validators ©2020 Created by Bindie. <br /> Like this site?{" "}
        <a
          href="https://bindscan.io/wallets/cU3kVS8sgH4E4hcyaUEQ6DtxwJo2Y4L8iP"
          rel="noopener noreferrer"
          target="_blank"
        >
          Consider voting for Bindie
        </a>
      </Footer>
    </Layout>
  );
});

export default Home;
