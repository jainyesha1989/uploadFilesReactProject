import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/LoginHandler.js';
import * as firebase from 'firebase';
import fireBaseConfig from '../../utils/fireBaseConfig';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';




let firebaseApp;
class fileUploadedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.showFilesUploaded = this.showFilesUploaded.bind(this);
        this.showFilesUploaded();
    }
   
    showFilesUploaded () {
        let fileList = [];
        for (let i in this.props.files) {
            fileList.push(<div>
                { this.props.files[i]}
                <MuiThemeProvider>
                    <a href="#"><FontIcon
                        className="material-icons customstyle"
                        color={blue500}
                        styles={{ top: 10, }}
                    >clear</FontIcon></a>
                </MuiThemeProvider>
            </div>
            )
        }
        this.setState({list: fileList});
    }
    handleClick(e) {
        // const { name, value } = e.target;
        // console.log(this.state.password);
        // this.setState({ [name]: value });
        // this.setState({errMsg : null})
        this.props.history.push('/fileUpload');
    }

    // handleSubmit(e) {
    //     e.preventDefault();
       
    //     this.setState({ submitted: true });
    //     const auth = {
    //         cred : {
    //             username : this.state.username,
    //             password : this.state.password
    //         },
    //         isSubmitted : this.state.submitted
    //     }
    //     this.props.authenticationAction.onLogin(auth, this.props.history);
       
    // }

    render() {
        const style = {
            margin: 15,
        };
        return (
            <div>
               
                <h1>Files Uploaded sucessfully RE </h1> <br></br>
                <div>{this.state.list} </div>
                upload more files
                <MuiThemeProvider>
                <RaisedButton label="Upload Files" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                </MuiThemeProvider>
            </div>
        )
    }
}
const mapStateToProps = (state) => (
   
    {
    files: state.fileUploadData.fileUploadDataArray
  });
  
  const mapDispatchToProps = (dispatch) => ({
    authenticationAction: bindActionCreators(
        userActionCreators, dispatch)
  });
   export default withRouter(connect(mapStateToProps, mapDispatchToProps)(fileUploadedList));

//export default withRouter((fileUploadedList));