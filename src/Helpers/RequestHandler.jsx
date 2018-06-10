import Promise from 'bluebird';
import axios from 'axios';
import { ERROR_MAPPING, ERROR_CODE, getErrorCode } from '../utils/constants';
/**
 * @author Suhas R More
 */
export default class RequestHandler {
    
    static get(action) {
        
        return new Promise((resolve, reject) => {
            axios.get(
                action
            ).then(
                function (response) {
                    let errorCode = getErrorCode(response.status);
                    if (errorCode === ERROR_CODE.HTTP_OK) {
                        resolve({
                            errorCode,
                            data: response.data
                        });
                    } else {
                        reject({
                            errorCode,
                            data: null
                        });
                    }
                    
                }
            ).catch(
                function (error) {
                    if (error === 498) {
                        reject(error);
                        console.log(error)
                    } else {
                        reject(error);
                       
                    }
                }
            );
        });
    }

}
