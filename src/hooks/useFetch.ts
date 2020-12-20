import { useReducer } from "react";

import logger from "../libs/logger";

type State<TData> = {
  state: "idle" | "loading" | "updating" | "error";
  isFetched: boolean;
  data: TData | null;
  error: Error | null;
};

type LoadingAction = {
  type: "LOADING";
};

type SuccessAction<TData> = {
  type: "SUCCESS";
  data: TData;
};

type FailureAction = {
  type: "FAILURE";
  error: Error;
};

type Action<TData> = LoadingAction | SuccessAction<TData> | FailureAction;

const createReducer = <TData>() => (
  state: State<TData>,
  action: Action<TData>
): State<TData> => {
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

const useFetch = <TData extends unknown>(
  key: string,
  apiMethod: () => Promise<TData>
) => {
  const reducer = createReducer<TData>();
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
