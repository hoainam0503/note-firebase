import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    getAction = () => {
        this.props.changeEdit();
        this.props.getEditData(this.props.item)
    }
    render() {
        return (
            <div className="card">
            <div className="card-header" role="tab" id={"note" + this.props.index}>
                <h5 className="mb-0">
                <a data-toggle="collapse" data-parent="#noteList" href={"#num" + this.props.index} aria-expanded="true" aria-controls={"num" + this.props.index}>
                    {this.props.tieude}
                </a>
                <div className="btn-group float-right">
                <button className="btn btn-outline-info" onClick={()=>this.getAction()}>Edit</button>
                <button className="btn btn-outline-secondary">Delete</button>
                </div>

                </h5>
            </div>
            <div id={"num" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby={"note" + this.props.index}>
                <div className="card-body">
                    {this.props.content}
                </div>
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEdit: () => {
            dispatch({type: "CHANGE_STT"})
        },
        getEditData: (itemObj) => {
            dispatch({type: "GET_DATA_EDIT", itemObj})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);