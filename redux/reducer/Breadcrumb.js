import * as Types from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case Types.BRAEDCRUMB:
            return action.payload;
        default:
            return state;
    }
};
