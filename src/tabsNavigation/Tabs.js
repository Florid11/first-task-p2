import React from "react";
import classes from "./Tabs.module.css";
import {Tab,Tabs,TabList,TabPanel} from "react-tabs";

const tabsComponent = () => {

  return(
      <div className={classes.box}>
          <div className={classes.tab}>
              <Tabs>
                  <TabList className={classes.tab_btn}>
                      <Tab className={classes.tab_click}>Domains</Tab>
                      <Tab disabled className={classes.tab_click}>Web Hosting</Tab>
                      <Tab disabled className={classes.tab_click}>Dedicated Servers</Tab>
                      <Tab disabled className={classes.tab_click}>Virtual Cloud Servers</Tab>
                      <Tab disabled className={classes.tab_click}>WordPress Hosting</Tab>
                      <Tab disabled className={classes.tab_click}>Email Hosting</Tab>
                      <Tab disabled className={classes.tab_click}>VPS Hosting Servers</Tab>
                      <Tab disabled className={classes.tab_click}>Free Hosting</Tab>
                  </TabList>
                  <TabPanel className={classes.panel}>
                      <p>Hello there</p>
                  </TabPanel>
              </Tabs>
          </div>
      </div>
  );
}

export default tabsComponent;