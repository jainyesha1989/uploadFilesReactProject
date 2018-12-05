import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/fileUploadActionCreator.js';
import Dropzone from 'react-dropzone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
import * as firebase from 'firebase';
//to do - state will come from redux , after file upload create a dispatcher which will redirect to new page

class fileUploadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filesToBeSent: [],
            filesPreview: [],
            fileUpload: this.props.fileUploadData
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.uploadImageAsPromise = this.uploadImageAsPromise.bind(this);
        //this.showUploadedFiles = this.showUploadedFiles.bind(this);
        this.filesuccess = null;
    }
    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        let filesToBeSent = this.state.filesToBeSent;
        filesToBeSent.push(acceptedFiles);
        // this.setState({filesToBeSent}); 

        let filesPreview = [];
        for (let i in filesToBeSent) {
            filesPreview.push(<div>
                {filesToBeSent[i][0].name}
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
        this.setState({ filesToBeSent, filesPreview });

    }

    handleClick(event) {
        let files = [],
            i;
        let filesPromise = Promise.resolve([]);
        if (this.state.filesToBeSent.length > 0) {
            const promises = this.state.filesToBeSent.map((file) => {
                return this.uploadImageAsPromise(file[0], this.props);
            });

            filesPromise = Promise.all(promises).then((results) => {
                if (results && results.length > 0) {
                    this.props.history.push('/list');

                    //this.showUploadedFiles();

                }
                // return [].concat(...results);
            });
        }
    }
    // showUploadedFiles() {
    //     let uploadedFileArray = [];
    //     if(this.state.fileUpload && this.state.fileUpload.length > 0) {
    //         for (let i in this.state.fileUpload) {
    //             uploadedFileArray.push(<div>
    //                 {this.state.fileUpload[i]}
    //             </div>
    //             )
    //         }
    //     }
    //     console.log('state final');
    //     console.log(this.state.fileUpload)
    // }

    uploadImageAsPromise(imageFile, props) {
        return new Promise(function (resolve, reject) {
            let storageRef = firebase.storage().ref('images/' + imageFile.name);

            //Upload file
            let task = storageRef.put(imageFile);

            //Update progress bar
            task.on('state_changed',
                function progress(snapshot) {
                    let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                    //uploader.value = percentage;
                },
                function error(err) {
                    console.log('file upload fails' + err)

                },
                function complete() {
                    let downloadURL = task.snapshot.downloadURL;

                    console.log('file upload succeed');
                    this.filesuccess = true;
                    // return <Redirect to='/list'/>
                    let fileDataArray = {
                        data:
                            imageFile.name
                    };
                    props.fileUploadAction.onfileUpload(fileDataArray, props.history);
                    resolve('file uploaded');
                }
            );
        });
    }

    render() {

        return (<React.Fragment>
            <div className="App">
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
            <div>

                {this.state.filesPreview}
            </div>
            <MuiThemeProvider>
                <RaisedButton label="Upload Files" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </MuiThemeProvider>
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
const style = {
    margin: 15,
};

//export default withRouter(fileUploadComponent);
const mapStateToProps = (state) => (
    {
        fileUploadData: state.fileUploadData.fileUploadDataArray   //refernce to something passed from redux via 
    });

const mapDispatchToProps = (dispatch) => ({
    fileUploadAction: bindActionCreators(
        userActionCreators, dispatch) //userActioncreator has reference to action creators ie fileUploadActionCreator
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(fileUploadComponent));