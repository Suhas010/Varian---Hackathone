import LocalizedStrings from 'react-localization';
import { config } from '../../utils/config';

let strings = new LocalizedStrings({

    EN:{
        ERROR: 'Error',
        OK: 'Ok',
        ERROR_MESSAGE: 'Somthing went wrong. Please try again.',
        FORBID_MESSAGE: 'Seems like you don\'t have access to this web page.',
        GET_WAY_TIME_OUT: 'Gateway time out or server is not reachable.',
        BAD_REQ: 'Bad request.',
        BAD_GETWAY: 'Internal server error or server is not reachable.'

    },

    MR: {
    }
});

strings.setLanguage(config.lang);

export default strings;