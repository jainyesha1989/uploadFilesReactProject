import Constants from "../constants/constants";
import { createReducer } from "../utils/utils";

const initialState = {
  credentialDataArray: [],
  isLogin: false,
};

export default createReducer(initialState, {
  [Constants.ON_LOGIN_SUCCESS]: (state, payload) => {

     // this.props.history.push(RoutesConstants.FILE_UPLOAD.path);
    return Object.assign({}, state, { credentialDataArray: payload.cred ,isLogin: payload.submitted });
    
  },
  [Constants.ON_LOGIN_FAIL]: (state, payload) => {},
  [Constants.ON_FILE_UPLOAD]: (state, payload) => {}

});