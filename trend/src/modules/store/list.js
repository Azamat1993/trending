import { observable, decorate, action } from "mobx";
import axios from "axios";

class List {
  items = [];

  fetchItems = async (q, sort) => {
    try {
      const result = await axios.get(
        "https://api.github.com/search/repositories",
        {
          params: {
            q,
            sort
          }
        }
      );

      this.setItems(result.data.items);
    } catch (e) {
      // @todo
    }
  };

  setItems = items => {
    this.items = items;
  };
}

export default decorate(List, {
  items: observable,

  setItems: action,
  fetchItems: action
});
