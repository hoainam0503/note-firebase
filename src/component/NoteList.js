import React, { Component } from 'react';
import NoteItem from './NoteItem';
import { noteData } from './firebaseConnect';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: []
    }
  }

  componentWillMount() {
    noteData.on('value', (notes) => {
      let arr = [];
      notes.forEach((value) => {
        arr.push({
          id: value.key,
          tieude: value.val().tieude,
          content: value.val().content
        })
      })
      this.setState({
        displayData: arr
      });
    })
  }

  getData = () => {
    if (this.state.displayData) {
      return this.state.displayData.map((value, key) => {
        return <NoteItem key={key} index={key} tieude={value.tieude} content={value.content} item={value}/>
      })
      console.log(this.state.displayData);

    }

  }
  render() {
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {
            this.getData()
          }
        </div>
      </div>
    );
  }
}

export default NoteList;