import React from "react";
import classes from "./Tabs.module.css";
import {Tab,Tabs,TabList,TabPanel} from "react-tabs";
import cards from "../components/Cards";
import "./Tabs.css";

const tabsComponent = () => {
  return(
      <div className={classes.box}>
          <div className={classes.tab}>
              <Tabs>
                  <TabList className={classes.tab_btn}>
                      <Tab >Domains</Tab>
                      <Tab >Web Hosting</Tab>
                      <Tab >Dedicated Servers</Tab>
                      <Tab >Virtual Cloud Servers</Tab>
                      <Tab >WordPress Hosting</Tab>
                      <Tab >Email Hosting</Tab>
                      <Tab >VPS Hosting Servers</Tab>
                      <Tab >Free Hosting</Tab>
                  </TabList>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
              </Tabs>
          </div>
      </div>
  );
}

export default tabsComponent;