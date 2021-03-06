import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/LoginHandler.js';
import * as firebase from 'firebase';
import fireBaseConfig from '../../utils/fireBaseConfig';


let firebaseApp;
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false, //this.props.login.isLogin,
            errMsg : this.props.login.errMsg
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        firebaseApp = firebase.initializeApp(fireBaseConfig);
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props.login.errMsg !== nextProps.login.errMsg) {
            this.setState({ errMsg:  nextProps.login.errMsg });
        }
       }
       

    handleChange(e) {
        const { name, value } = e.target;
        console.log(this.state.password);
        this.setState({ [name]: value });
        this.setState({errMsg : null})
    }

    handleSubmit(e) {
        e.preventDefault();
       
        this.setState({ submitted: true });
        const auth = {
            cred : {
                username : this.state.username,
                password : this.state.password
            },
            isSubmitted : this.state.submitted
        }
        this.props.authenticationAction.onLogin(auth, this.props.history);
       
    }

    render() {

        const { loggingIn } = this.props;
         const { username, password, submitted, errMsg } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                { this.state.errMsg &&  <div>
               
                    <span>{this.state.errMsg}</span>  
                </div> 
                }
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        {/* <Link to="/register" className="btn btn-link">Register</Link> */}
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => (
   
    {
    login: state.login
  });
  
  const mapDispatchToProps = (dispatch) => ({
    authenticationAction: bindActionCreators(
        userActionCreators, dispatch)
  });
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));