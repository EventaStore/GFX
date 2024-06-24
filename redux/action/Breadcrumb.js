import * as Types from '../constants/actionTypes'

export const breadcrumb = data => dispatch => {
    dispatch({
        type: Types.BRAEDCRUMB,
        payload: data
    })
}