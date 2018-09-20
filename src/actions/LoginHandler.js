import Constants from '../constants/constants';
import * as firebase from 'firebase';
//import {history} from '../utils/history';
import RoutesConstants from '../constants/route.constants';


let firebaseApp;
//import  data from '../customers.json';

export const onLogin = (loginData, history) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(loginData.cred.username, loginData.cred.password)
            .then((resp) => {
                dispatch(createUserSuccess(resp, loginData));
                console.log('i am disp');
                console.log(history);
                history.push('/fileUpload');
            })
            .catch((error) => dispatch(createUserFail));
        // dispatch({
        //     type: Constants.ON_LOGIN_SUCESS,
        //     payload: loginData
        // });
    }
};

export const createUserSuccess = (resp, loginData) => {
    return {
        type: Constants.ON_LOGIN_SUCCESS,
        payload: loginData,
    }
}
export const createUserFail = (error) => {
    return {
        type: Constants.ON_LOGIN_FAIL,
        error
    }
}


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
