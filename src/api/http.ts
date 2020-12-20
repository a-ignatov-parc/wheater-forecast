const getRandomTimeout = () => Math.ceil(Math.random() * 1000);

const sleep = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomTimeout()));

const shouldThrow = () => Math.ceil(Math.random() * 10) % 2 === 1;

const emulateFetch = async () => {
  await sleep();

  if (shouldThrow()) {
    throw new Error("Some api error");
  }
};

export default emulateFetch;
