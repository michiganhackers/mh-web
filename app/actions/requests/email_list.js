import { simpleGetRequest } from '../../util/actions.js';

export default class EmailListRequests {
    
    static addToEmailList() {
        // return simpleGetRequest('https://api.mailjet.com/v3/REST/3e11c26a5131f58e63a2c2d75c69b0f0'); 
        return simpleGetRequest('https://www.google.com'); 
    }

}
