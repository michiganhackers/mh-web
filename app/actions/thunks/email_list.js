import { actions } from '../../actions';
import { EmailListRequests } from '../requests';

export default class EmailListThunks {
    static addToEmailList(data) {
        return dispatch => {
            dispatch({ type: actions.JOIN_EMAIL_LIST_REQUEST, data: data });

            // const body = { email: data.email };

            // Ask - mainly the TeamsRequests and "type"
            return EmailListRequests.addToEmailList().then(response => {
                if (response.status == 200) {
                    response.json().then(json => {
                        dispatch({
                            type: actions.JOIN_EMAIL_LIST_SUCCESS,
                            data: data,
                            message: json.message
                        });
                    });
                } else {
                    response.json().then(json => {
                        dispatch({
                            type: actions.JOIN_EMAIL_LIST_FAILURE,
                            error: response.status,
                            message: json.message
                        });
                    });
                }
            });
        };
    }

}
