
const API_URL = "http://starlord.hackerearth.com";

export const PortalAPI = {
    getHackerNewsArticles: API_URL + '/hackernews',
   
}

export const ERROR_CODE = {
    
    // Stander HTTP error codes
    HTTP_OK: 200,
    HTTP_CREATE: 201,
    HTTP_ACCEPTED: 202,
    HTTP_NON_AUTH: 203,
    HTTP_BAD_REQ: 400,
    HTTP_UN_AUTH: 401,
    HTTP_FORBID: 403,
    HTTP_NOT_FOUND: 404,
    HTTP_TIME_OUT: 408,
    HTTP_INT_SER_ERR: 500,
    HTTP_BAD_GET: 502,
    HTTP_SER_NOT_AVL: 503,
    HTTP_GET_TIM_OUT: 504,
    HTTP_AUT_REQ: 511,
    FAILED: -1,

}

// returns and array to minimise search operation for error code
export  const ERROR_MAPPING = {

    [ERROR_CODE.HTTP_OK] : ERROR_CODE.HTTP_OK,
    [ ERROR_CODE.HTTP_CREATE ] : ERROR_CODE.HTTP_CREATE,
    [ ERROR_CODE.HTTP_ACCEPTED ] : ERROR_CODE.HTTP_ACCEPTED,
    [ ERROR_CODE.HTTP_NON_AUTH ] : ERROR_CODE.HTTP_NON_AUTH,
    [ ERROR_CODE.HTTP_BAD_REQ ] : ERROR_CODE.HTTP_BAD_REQ,
    [ ERROR_CODE.HTTP_UN_AUTH ] : ERROR_CODE.HTTP_UN_AUTH,
    [ ERROR_CODE.HTTP_FORBID ] : ERROR_CODE.HTTP_FORBID,
    [ ERROR_CODE.HTTP_NOT_FOUND ] : ERROR_CODE.HTTP_NOT_FOUND,
    [ ERROR_CODE.HTTP_TIME_OUT ] : ERROR_CODE.HTTP_TIME_OUT,
    [ ERROR_CODE.HTTP_INT_SER_ERR ] : ERROR_CODE.HTTP_INT_SER_ERR,
    [ ERROR_CODE.HTTP_BAD_GET ] : ERROR_CODE.HTTP_BAD_GET,
    [ ERROR_CODE.HTTP_SER_NOT_AVL ] : ERROR_CODE.HTTP_SER_NOT_AVL,
    [ ERROR_CODE.HTTP_GET_TIM_OUT ] : ERROR_CODE.HTTP_GET_TIM_OUT,
    [ ERROR_CODE.HTTP_AUT_REQ ] : ERROR_CODE.HTTP_AUT_REQ,
    [ ERROR_CODE.NOT_ACC ] : ERROR_CODE.NOT_ACC,
    [ ERROR_CODE.ENH_UR_CALM ] : ERROR_CODE.ENH_UR_CALM,
    [ ERROR_CODE.UN_PRO_ENT ] : ERROR_CODE.UN_PRO_ENT,
    [ ERROR_CODE.LIMIT_EXCEED ] : ERROR_CODE.LIMIT_EXCEED,
    
}

/**
 * @description return appropriateerror code
 * @author Suhas R More
 * @export
 * @param {any} errorCode 
 * @returns 
 */
export function getErrorCode( errorCode ) {
    
    return ERROR_MAPPING[ errorCode ] ?
        ERROR_MAPPING[ errorCode ] :
        ERROR_MAPPING[ ERROR_CODE.FAILED ];
}