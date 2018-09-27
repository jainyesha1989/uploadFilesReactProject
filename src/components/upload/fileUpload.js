import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';

class fileUploadComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            filesToBeSent: [],
            filesPreview: []
        };
        this.onDrop = this.onDrop.bind(this);
    }
    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        let filesToBeSent=this.state.filesToBeSent;
        filesToBeSent.push(acceptedFiles);
       // this.setState({filesToBeSent}); 
       
        let filesPreview=[];
        for(let i in filesToBeSent){
          filesPreview.push(<div>
            {filesToBeSent[i][0].name}
            <MuiThemeProvider>
            {/* <a href="#"><FontIcon
              className="material-icons customstyle"
              color={blue500}
              styles={{ top:10,}}
            >clear</FontIcon></a> */}
            </MuiThemeProvider>
            </div>
          )
        }
        this.setState({filesToBeSent,filesPreview});
      
    }
    render(){
        
        return (<React.Fragment>
            <div className="App">
                <Dropzone onDrop= {this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
            <div>
                Files to be printed are:
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
  
export default withRouter(fileUploadComponent);