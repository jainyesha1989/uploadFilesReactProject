import Constants from '../constants/constants';
import * as firebase from 'firebase';
//import {history} from '../utils/history';
import RoutesConstants from '../constants/route.constants';


let firebaseApp;
//import  data from '../customers.json';

export const onfileUpload = (fileUploadDataArr, history, fileUploadStatus) => {
    return (dispatch, getState) => {
            
        dispatch({
            type: Constants.ON_FILEUPLOAD_SUCCESS,
            payload: fileUploadDataArr
        });
        //history.push('/list');
    }
};

// export const createUserSuccess = (resp, loginData) => {
//     return {
//         type: Constants.ON_LOGIN_SUCCESS,
//         payload: loginData,
//     }
// }
// export const createUserFail = (error) => {
//     return {
//         type: Constants.ON_LOGIN_FAIL,
//         payload: error
//     }
// }


// export const onFormAdd = () => {
//     return (dispatch, getState) => {
//         dispatch({
//             type: Constants.ON_FORM_ADD,
//             payload: true
//         });
//     }
// };
// export const addEditCustomer = (customerList) => {
//     return (dispatch) => {
//         dispatch({
//           type:Constants.ON_CUSTOMERS_ADD_EDIT,
//           payload:customerList
//         });
//     }
// };
