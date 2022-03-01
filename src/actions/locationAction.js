import axios from "axios";
import { geoCoding_url } from "../Api_URLS";

export const getCity = () => async (dispatch) => {
  const cityData = await axios.get(geoCoding_url());
  dispatch({
    type: "GET_CITY",
    payload: {
      city: cityData,
    },
  });
};
