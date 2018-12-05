export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
      acc[constant] = constant;
      return acc;
    }, {});
  }
  
  export function createReducer(initialState, reducerMap) {
    return (state = initialState, action = {}) => {
      const reducer = reducerMap[action.type];
  
      return reducer ? reducer(state, action.payload) : state;
    };
  }

  export function createReducerForFile(initialStateForFile, reducerMapForFile) {
   let initialState = initialStateForFile ? initialStateForFile.fileUploadDataArray : undefined;
    return (initialState, action = {}) => {
      const reducerforFile = reducerMapForFile[action.type];
  
      return reducerforFile ? reducerforFile(initialStateForFile, action.payload) : initialStateForFile;
    };
  }
  