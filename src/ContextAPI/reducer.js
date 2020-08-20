export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //REMOVE after finished developing...
  token:
    "BQCPCMO87BGuoRKz5Klg9ABh4d3pY1xyy-xVIFfHkFWmZrgKVGWYWxRGaeNDrvdJGN-nQ8fUVkRcGA5eOoeAXrp8aqZwHL2PSYgqAUchWDWAKKh1swD0DEOrg-ZgSJfU9g-FDIkEWipDtmS3Nh9SxZzazkyPh6F0kOG13l659oT4xVbCUbdC",
}; //초기화

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
export default reducer;
