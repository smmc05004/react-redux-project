import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoardRow extends Component {

    removeBtnClick = () => {
        const {row, remove} = this.props;
        remove(row.no);
    }

    showBtnClick = () => {
        const {row, show} = this.props;
        show(row.no);
    }

    render() {
        const { row } = this.props;
        return(
            <tr>
                <td><input type='checkbox' value={row.no}/></td>
                <td>{row.no}</td>
                <td>{row.title}</td>
                <td>{row.contents}</td>
                <td><button type="button"
                            onClick={ this.removeBtnClick }
                    >삭제</button>
                </td>
                <td><button type="button"
                            onClick={ this.showBtnClick }
                    >수정</button>
                </td>
            </tr>
        );
    }
}

BoardRow.propTypes = {
    remove: PropTypes.func,
    show: PropTypes.func
}
export default BoardRow;