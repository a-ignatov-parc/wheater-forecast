import { act, renderHook } from "@testing-library/react-hooks";
import useFetch from "../useFetch";

it("should return an oject with default state", () => {
  const apiMethod = jest.fn();
  const {
    result: { current },
  } = renderHook(() => useFetch("key", apiMethod));

  expect(current).toMatchObject({
    fetch: expect.any(Function),
    state: "idle",
    data: null,
    error: null,
    isFetched: false,
  });
});

it("should call apiMethod", () => {
  const apiMethod = jest.fn(
    () =>
      new Promise((resolve) => {
        setInterval(resolve, 100);
      })
  );
  const {
    result: { current },
  } = renderHook(() => useFetch("key", apiMethod));

  act(() => {
    current.fetch();
  });

  expect(apiMethod).toHaveBeenCalledTimes(1);
});

// More, more tests...
