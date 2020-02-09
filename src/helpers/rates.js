import axios from "axios";
const URL = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR";

export const getRate = async (currency = "EUR") => {
  const { data } = await axios.get(URL);
  return data[currency];
};
