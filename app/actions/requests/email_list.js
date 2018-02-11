import { simpleGetRequest } from '../../util/actions.js';

export default class EmailListRequests {
    
    static addToEmailList() {
        // return simpleGetRequest('https://api.mailjet.com/v3/REST/contact'); 
        return simpleGetRequest('http://692cd87c.ngrok.io/'); 
        // return simpleGetRequest('https://www.google.com/'); 
    }

}
