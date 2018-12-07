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
       // this.showFilesUploaded();
    }
   
    showFilesUploaded () {
        let list = [];
        for (let i in this.props.files) {
            list.push(<div>
                { this.props.files[i]}
            </div>
            )
        }
        this.setState((list)=> {
            return {list: list}
        });
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
        let namesList = this.props.files.map(function(files){
            return <li>{files}</li>;
          });
        return (
            <div>
               
                <h2>Files Uploaded sucessfully are </h2> <br></br>
                <div>{namesList} </div>
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