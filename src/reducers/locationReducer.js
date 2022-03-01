const initState = {
  city: [],
  country: [],
  lat: [],
  lon: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CITY":
      return { ...state, city: action.payload.city };
    default:
      return { ...state };
  }
};

export default locationReducer;
