import React, { Component } from 'react';
// import './App.css';
import BoardForm from '../component/BoardForm';
import BoardList from '../component/BoardList';
import { connect } from 'react-redux';
import MainTemplate from '../component/template/MainTemplate';

class Board extends Component {
  state = {
    count : 0,
    maxNo : 0,
    boardList : [],
    selectedBoard : {},
  }

  render() {
    return (
      <MainTemplate>
        <section>
          <div>
            <h3>Board</h3>
          </div>

          <BoardForm />
          
          <BoardList />
        </section>
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boardList : state.boardList
  }
}

export default connect(mapStateToProps)(Board);