import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

import { ListContext } from "modules/context/list";

export const Header = () => {
  const store = useContext(ListContext);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("name");

  return (
    <AppBar position="static">
      <Toolbar>
        <InputBase
          placeholder="Search…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
        <RadioGroup
          aria-label="position"
          name="position"
          value={sort}
          onChange={e => setSort(e.target.value)}
          row
        >
          <FormControlLabel
            value="name"
            control={<Radio color="primary" />}
            label="Sort by name"
            labelPlacement="end"
          />
          <FormControlLabel
            value="owner.id"
            control={<Radio color="primary" />}
            label="Sort by owner"
            labelPlacement="end"
          />
          <FormControlLabel
            value="stars"
            control={<Radio color="primary" />}
            label="Sort by stars"
            labelPlacement="end"
          />
        </RadioGroup>
        <Button onClick={() => store.fetchItems(search, sort)}>Find</Button>
      </Toolbar>
    </AppBar>
  );
};
