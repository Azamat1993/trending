import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { useObserver } from "mobx-react";

import { Trend } from "./trend";
import { ListContext } from "modules/context/list";

export const Trends = ({ items }) => {
  const store = useContext(ListContext);

  return useObserver(() =>
    <Grid container>
      {store.items.map(item => <Trend key={item.id} item={item} />)}
    </Grid>
  );
};
