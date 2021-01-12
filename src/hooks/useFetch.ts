import { useReducer } from "react";

import logger from "../libs/logger";

export type Data = {
  value: string;
};

type State = {
  state: "idle" | "loading" | "updating" | "error";
  isFetched: boolean;
  data: Data | null;
  error: Error | null;
};

type LoadingAction = {
  type: "LOADING";
};

type SuccessAction = {
  type: "SUCCESS";
  data: Data;
};

type FailureAction = {
  type: "FAILURE";
  error: Error;
};

type Action = LoadingAction | SuccessAction | FailureAction;

const createReducer = () => (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        state: state.isFetched ? "updating" : "loading",
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        state: "idle",
        isFetched: true,
        data: action.data,
        error: null,
      };
    }
    case "FAILURE": {
      return {
        ...state,
        state: "error",
        data: null,
        error: action.error || null,
      };
    }
    default:
      return state;
  }
};

const useFetch = (key: string, apiMethod: () => Promise<Data>) => {
  const reducer = createReducer();
  const [{ state, data, error, isFetched }, dispatch] = useReducer(reducer, {
    state: "idle",
    isFetched: false,
    data: null,
    error: null,
  });

  const fetch = async () => {
    if (state === "loading" || state === "updating") return;

    try {
      dispatch({
        type: "LOADING",
      });

      const response = await apiMethod();

      dispatch({
        type: "SUCCESS",
        data: response,
      });
    } catch (error) {
      logger.error(error.message);

      dispatch({
        type: "FAILURE",
        error,
      });
    }
  };

  return {
    fetch,
    state,
    data,
    error,
    isFetched,
  };
};

export default useFetch;
