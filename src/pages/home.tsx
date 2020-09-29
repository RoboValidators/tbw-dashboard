import React, { useState } from "react";
import { Layout, Menu } from "antd";

import "./home.css";

const VoterOverview = React.lazy(() => import("./Payouts"));
const TransactionsOverview = React.lazy(() => import("./Voters"));

const { Header, Content, Footer } = Layout;

const OVERVIEW_VOTERS = "1";
const OVERVIEW_TRANSACTIONS = "2";
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
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedOverview]}>
          <Menu.Item key={OVERVIEW_VOTERS} onClick={handleNavigate}>
            Voters overview
          </Menu.Item>
          <Menu.Item key={OVERVIEW_TRANSACTIONS} onClick={handleNavigate}>
            Payout history
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{renderOverview()}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Robo Validators ©2020 Created by Bindie. <br /> Like this site? Consider voting for Bindie
      </Footer>
    </Layout>
  );
});

export default Home;
