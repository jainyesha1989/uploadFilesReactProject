import LoginForm from '../components/login/loginFormContainer';
import fileUploadComponent from '../components/upload/fileUpload';
import fileUploadedList from '../components/filesUploaded/filesUploadedList';


const Routes = {
    'LOGIN' : {
        path: '/Login',
        component: LoginForm
    },
    'FILE_UPLOAD' : {
        path: '/fileUpload',
        component: fileUploadComponent
    },
    'FILE_UPLOAD_LIST': {
        path: '/list',
        component: fileUploadedList
    }
};

export default Routes;