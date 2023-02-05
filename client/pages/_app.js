// BEST place to import bootstrap...
// this file gets loaded first

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import "../public/css/styles.css";
import TopNav from "../components/TopNav";

const MyApp = ({ Component, pagesProps }) => {
  return (
    <>
      <TopNav />
      <Component {...pagesProps} />
    </>
  );
};

export default MyApp;
