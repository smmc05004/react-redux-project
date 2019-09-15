import C from '../constants/constants';

export const save_Board = (board) => ({
    type: C.SAVE_BOARD,
    board
});

export const delete_Board = (boardNo) => ({
    type: C.REMOVE_BOARD,
    no : boardNo
});

export const get_Board = (boardNo) => ({
    type: C.GET_BOARD,
    no: boardNo
});

const initialState = {
    count : 0,
    maxNo : 0,
    boardList : [],
    selectedBoard : {},
}

export default function board (state = initialState, action) {
    const boardList = state.boardList;
    const maxNo = state.maxNo;
    const count = state.count;

    switch(action.type) {
        case C.SAVE_BOARD :
            if (action.board.no !== "") {
                return {
                    ...state,
                    boardList: boardList.map( row => row.no === action.board.no ? {...action.board} : row),
                    selectedBoard: {}
                };
                
            } else {
                return {
                    maxNo: maxNo + 1,
                    count: count + 1,
                    boardList: boardList.concat( { no : maxNo + 1, title : action.board.title, contents : action.board.contents } ),
                    selectedBoard: {}
                }
            }

        case C.REMOVE_BOARD:
            return {
                maxNo: maxNo,
                count: count - 1,
                boardList: boardList.filter( row => row.no === action.boardNo ),
                selectedBoard: {}
            };

        case C.GET_BOARD:
            const selectedBoard = boardList.filter( row => row.no === action.no )[0];
            return {
                ...state,
                selectedBoard: {no: selectedBoard.no, title: selectedBoard.title, contents: selectedBoard.contents} 
            };

        default :
            return state;
    }
}