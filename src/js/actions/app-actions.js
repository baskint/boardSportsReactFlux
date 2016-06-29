import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  addBoard(board) {
      dispatch({
        actionType: AppConstants.ADD_BOARD, board
      })
  },
  removeBoard(board) {
      dispatch({
        actionType: AppConstants.REMOVE_BOARD, board
      })
  },
  addSession(session) {
      dispatch({
        actionType: AppConstants.ADD_SESSION, board
      })
  },
  removeSession(board) {
      dispatch({
        actionType: AppConstants.REMOVE_SESSION, board
      })
  },
}
