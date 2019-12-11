import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tieude: '',
          contentNote: '',
          id: ''
        }
      }
    
    componentWillMount() {
        if(this.props.editItem){
            this.setState({
                tieude: this.props.editItem.tieude,
                contentNote: this.props.editItem.content,
                id: this.props.editItem.id
            });
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    addDt = () => {
        var item = {};
        item.tieude = this.state.tieude;
        item.content = this.state.contentNote;

        this.props.addDataStore(item);
        // this.props.addData(this.state.tieude, this.state.contentNote)
    }
    render() {
        return (
            <div className="col-4">
            <h3>Sửa Node</h3>
            <form>
            <div className="form-group">
                <label htmlFor="tieude">Tiêu đề Note</label>
                <input defaultValue={this.props.editItem.tieude} onChange={(event)=>this.isChange(event)}  type="text" name="tieude" id="tieude" className="form-control" placeholder="Tiêu đề Note" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Điền tiêu đề vào </small>
            </div>
            <div className="form-group">
                <label htmlFor="contentNote">Nội dung Note</label>
                <textarea onChange={(event)=>this.isChange(event)} name="contentNote" id="contentNote" className="form-control" placeholder="Nội dung Note" aria-describedby="helpId" defaultValue={this.props.editItem.content} />
                <small id="helpId" className="text-muted">Điền nội dung vào </small>
            </div>
            <button type="reset" className="btn btn-primary btn-block" onClick={this.addDt}>Lưu</button>
            </form>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.itemEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (item) => {
            dispatch({type: "ADD_DATA", item})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
