import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Header } from "modules/shared/header";
import { Sidebar } from "modules/shared/sidebar";
import { Footer } from "modules/shared/footer";
import { Trends } from "modules/trends";
import List from "modules/store/list";
import { ListContext } from "modules/context/list";

const store = new List();

export const Home = () => {
  return (
    <ListContext.Provider value={store}>
      <Grid container>
        <Header />
        <Grid container wrap="nowrap">
          <Sidebar />
          <Trends />
        </Grid>
        <Footer />
      </Grid>
    </ListContext.Provider>
  );
};
