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
                      <Tab disabled >Web Hosting</Tab>
                      <Tab disabled >Dedicated Servers</Tab>
                      <Tab disabled >Virtual Cloud Servers</Tab>
                      <Tab disabled >WordPress Hosting</Tab>
                      <Tab disabled >Email Hosting</Tab>
                      <Tab disabled >VPS Hosting Servers</Tab>
                      <Tab disabled >Free Hosting</Tab>
                  </TabList>
                  <TabPanel className={classes.panel}>
                      {cards()}
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
                  <TabPanel className={classes.panel}>
                      <h1>Hello</h1>
                  </TabPanel>
              </Tabs>
          </div>
      </div>
  );
}

export default tabsComponent;