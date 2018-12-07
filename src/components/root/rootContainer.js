import React, {Component} from 'react';
// import Header from '../header/headerComponent';
import RoutesConstants from '../../constants/route.constants';
import { connect } from 'react-redux';

// import { connect } from 'react-redux';
// import * as userActionsCreater from '../../actions/customersHandler'; 
// import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import VerifyLoggedInContainer from '../Authentication/VerifyLoggedInContainer';

class Root extends Component{
    // componentDidMount(){
    //     this.props.customersAction.getCustomers();
    // }
    render(){
        let { isLoggedIn } = this.props;
        return(<React.Fragment>
            {/* <Header /> */}
            {/* <Route exact  path='/'  render={ ()=> <Redirect to={RoutesConstants.LOGIN.component} />} /> */}

            <Route  path={RoutesConstants.LOGIN.path}   component={RoutesConstants.LOGIN.component} />
            <VerifyLoggedInContainer authed={this.props.isLoggedIn}  path={RoutesConstants.FILE_UPLOAD.path} 
                    component={RoutesConstants.FILE_UPLOAD.component} />
            <VerifyLoggedInContainer authed={this.props.isLoggedIn} path={RoutesConstants.FILE_UPLOAD_LIST.path} 
                    component={RoutesConstants.FILE_UPLOAD_LIST.component}/>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    isLoggedIn: state.login.isLogin
});
// const mapDispatchToProps = (dispatch) => ({
//     customersAction: bindActionCreators(userActionsCreater, dispatch)
// });
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));

export default  withRouter(connect(mapStateToProps)(Root));