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
                    console.log('RESPONSE STATUS IS: ' + response.status)
                    response.json().then(json => {
                        dispatch({
                            type: actions.JOIN_EMAIL_LIST_SUCCESS,
                            data: data,
                            message: json.message
                        });
                    });
                } else {
                    console.log('RESPONSE STATUS IS: ' + response.status)
                    response.json().then(json => {
                        dispatch({
                            type: actions.JOIN_EMAIL_LIST_FAILURE,
                            data: data,
                            message: json.message
                        });
                    });
                }
            });
        };
    }

}
