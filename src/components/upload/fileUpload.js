import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

class fileUploadComponent extends Component{

    render(){
        
        return(<React.Fragment>
            <div><h1>File Upload</h1></div>
            </React.Fragment>
        )
    }
}
// const mapStateToProps = (state) => ({
//     tabIndex: state.tabs.tabIndex
// });
// const mapDispatchToProps = (dispatch) => ({
//     customersAction: bindActionCreators(userActionsCreater, dispatch)
// });
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));

export default withRouter(fileUploadComponent);