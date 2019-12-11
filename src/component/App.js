import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import {connect} from 'react-redux';
class App extends Component {
  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }
  render(){    
     return (
      <div >
        <Header />
        <div className="container">
          <div className="row">
          <NoteList />
          {
            this.showForm()
          }
          </div>
        </div>
      </div>
    );
  }
  
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
export default connect(mapStateToProps)(App);
