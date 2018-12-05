// To combine all reducers
import { combineReducers } from 'redux';
import login from './loginReducer';
import fileUploadData from './fileUploadReducer';

export default combineReducers({
    login,
    fileUploadData,
});
