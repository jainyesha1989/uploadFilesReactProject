// To combine all reducers
import { combineReducers } from 'redux';
import login from './loginReducer';
import fileUploadedList from './fileUploadedListReducer';

export default combineReducers({
    login,
    fileUploadedList,
});
