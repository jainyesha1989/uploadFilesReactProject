import loginForm from '../components/login/loginFormContainer';
import fileUploadComponent from '../components/upload/fileUpload';
import filesUploadedList from '../components/filesUploaded/filesUploadedList';


const Routes = {
    'LOGIN' : {
        path: '/Login',
        component: loginForm
    },
    'FILE_UPLOAD' : {
        path: '/fileUpload',
        component: fileUploadComponent
    },
    'FILE_UPLOAD_LIST': {
        path: '/list',
        component: filesUploadedList
    }
};

export default Routes;