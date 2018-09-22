import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class fileUploadComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            filesToBeSent: []
        };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        let filesToBeSent=this.state.filesToBeSent;
        filesToBeSent.push(acceptedFiles);
        this.setState({filesToBeSent}); 
    }
    render(){
        
        return (<React.Fragment>
            <div className="App">
                <Dropzone onDrop= {this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
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