export const reducerFactory = () => (state, action) => {
  switch (action.type) {
    case "error": {
      return {
        ...state,
        status: "error",
        error: action.error,
      };
    }
    case "success": {
      return {
        ...state,
        status: "success",
        payload: action.payload,
      };
    }
    case "loading": {
      return {
        ...state,
        status: "loading",
      };
    }
    default:
      throw new Error(`Action not supported`);
  }
};
