import UsersService from '../../../services/users.service'
import actions from './users.actions'

export const loadUsersAsync = () => (dispatch) =>{
    dispatch(actions.usersLoadStart())

    UsersService.getAllusers()
    .then(res => dispatch(actions.usersLoadSuccess(res)))
    .catch(err => dispatch(actions.usersLoadError(err.message)))
}