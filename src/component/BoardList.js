import React, { Component } from 'react';
import BoardRow from './BoardRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delete_Board, get_Board } from './../reducer/reducer';

class BoardList extends Component {
    state = {
        no: '번호',
        tit: '제목',
        con: '내용',
        // importance: '중요도',
    }

    deleteRow = (no) => {
        // this.props.deleteBoard(no);
        this.props.dispatch( delete_Board(no) );
    }

    showRow = (no) => {
        this.props.dispatch( get_Board(no) );
    }

    render() {
        const { no, tit, con } = this.state;
        const { boardList } = this.props;

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><input type='checkbox'/></td>
                            <th>{no}</th>
                            <th>{tit}</th>
                            <th>{con}</th>
                        </tr>
                    </thead>
                    <tbody>
                        { boardList.length === 0 ?
                            <tr><td className="noList" colSpan='5'>게시글 없음</td></tr> :
                            boardList.map( 
                                (board, i) => 
                                (<BoardRow key={i} row={ board } remove={ this.deleteRow } show={this.showRow}/> ) )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

BoardList.propTypes = {
    boardList: PropTypes.array,
    deleteBoard: PropTypes.func,
    showBoard: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        boardList : state.boardList,
        selectedBoard : state.selectedBoard
    }
}

export default connect(mapStateToProps)(BoardList);