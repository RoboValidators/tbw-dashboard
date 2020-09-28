import React, { useState } from "react";
import { Layout, Menu } from "antd";

import "./home.css";
import VoterOverview from "./VoterOverview";
import TransactionsOverview from "./Transactions";

const { Header, Content, Footer } = Layout;

const OVERVIEW_VOTERS = "1";
const OVERVIEW_TRANSACTIONS = "2";

const Home = React.memo(() => {
  const [selectedOverview, setSelectedOverview] = useState(OVERVIEW_TRANSACTIONS);

  const handleNavigate = (event: any) => {
    setSelectedOverview(event.key);
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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[OVERVIEW_VOTERS]}>
          <Menu.Item key={OVERVIEW_VOTERS} onClick={handleNavigate}>
            Voters overview
          </Menu.Item>
          <Menu.Item key={OVERVIEW_TRANSACTIONS} onClick={handleNavigate}>
            Payouts
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
