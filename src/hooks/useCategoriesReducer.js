import React from "react";
import { reducerFactory } from "utils/reducer-factory";
import { getAllCategories } from "api";

export const useCategoriesReducer = () => {
  const [state, dispatch] = React.useReducer(reducerFactory(), {
    status: "loading",
  });

  React.useEffect(() => {
    async function getData() {
      try {
        const { categories } = await getAllCategories();
        dispatch({ type: "success", payload: categories.items });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }

    getData();
  }, []);

  return { categoriesStatus: state.status, categoriesPayload: state.payload };
};
