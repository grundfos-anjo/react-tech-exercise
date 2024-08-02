import { FunctionComponent } from "react";

import { Header } from "../components";

import { Routes } from "../routes";

const Layout: FunctionComponent = () => {
  return (
    <div>
      <Header label="SHOP" />
      <Routes />
    </div>
  );
};
export default Layout;
