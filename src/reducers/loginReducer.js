import Constants from "../constants/constants";
import { createReducer } from "../utils/utils";

const initialState = {
  credentialDataArray: [],
  isLogin: null,
  errMsg: null
};

export default createReducer(initialState, {
  [Constants.ON_LOGIN_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, { credentialDataArray: payload.cred ,isLogin: true });
    
  },
  [Constants.ON_LOGIN_FAIL]: (state, payload) => {
    return Object.assign({}, state, { errMsg: payload.message ,isLogin: false });
  }

});