import { noteData } from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    itemEdit: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            console.log("ket noi thanh cong");
            noteData.push(action.item)
            return state
        case "CHANGE_STT":
            console.log("ket noi thanh cong");
            return { ...state, isEdit: !state.isEdit }
        case "GET_DATA_EDIT":
            console.log("ket noi thanh cong");
            return { ...state, itemEdit: action.itemObj }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function() {
    console.log(JSON.stringify(store.getState()));
    
})
export default store;