const initState = {
  temperature_current: [],
  temperature_24h: [],
  description: [],
  icon: [],
  humidity: [],
  uv: [],
};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state };
    default:
      return { ...state };
  }
};

export default weatherReducer;
