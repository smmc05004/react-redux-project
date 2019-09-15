import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { save_Board } from './../reducer/reducer';

class BoardForm extends Component {

    onSubmit = (e) => {
        e.preventDefault();

        const { _title, _contents } = this.refs;
        const { selectedBoard } = this.props;

        const data = {
            title : _title.value,
            contents : _contents.value,
            no : (selectedBoard.no !== undefined) ? selectedBoard.no : "",
        }

        this.props.dispatch( save_Board(data) );

        _title.value = '';
        _contents.value = '';
        _title.focus();

    }

    onShow = () => {
        const { selectedBoard } = this.props;

        if (selectedBoard.title !== undefined) {
            const { _title, _contents } = this.refs;
            
            _title.value = selectedBoard.title;
            _contents.value = selectedBoard.contents;
        }
    }


    render() {
        this.onShow();
        
        
        return (
            <div>
                <form>
                    <div>
                        <input ref="_title" type="text" placeholder='title' />
                    </div>
                    <div>
                        <input ref="_contents" type="text" placeholder='content' />
                    </div>
                    <div>
                        <button type='button' onClick={this.onSubmit}>제출</button>
                    </div>
                </form>
            </div>
        );
    }
}

BoardForm.propTypes = {
    onSubmit: PropTypes.func,
    selected: PropTypes.object
}


const mapStateToProps = (state) => {
    return {
      boardList : state.boardList,
      selectedBoard : state.selectedBoard
    }
}

export default connect(mapStateToProps)(BoardForm);