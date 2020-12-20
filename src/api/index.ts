import emulateFetch from "./http";

type ForcastForToday = {
  value: string;
  date: Date;
};

export const getForcastForToday = async (): Promise<ForcastForToday> => {
  await emulateFetch();

  return {
    value: "Partly cloudy",
    date: new Date()
  };
};

type ForcastForTomorrow = {
  value: string;
};

export const getForcastForTomorrow = async (): Promise<ForcastForTomorrow> => {
  await emulateFetch();

  return {
    value: "Mostly sunny"
  };
};
