const logger = {
  error(msg: string) {
    // Send data to a error tracker
    console.error(`LOGGER: ${msg}`);
  },
};

export default logger;
