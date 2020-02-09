import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  row: {
    margin: theme.spacing(1, 0),
    padding: theme.spacing(1, 0),
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid"
  }
}));

export const Trend = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.row} item container justify="space-between">
      <Grid item xs={2}>
        {item.name}
      </Grid>
      <Grid item xs={3}>
        {item.description}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="body2">
          {item.contributors_url}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        {item.stargazers_count}
      </Grid>
    </Grid>
  );
};
