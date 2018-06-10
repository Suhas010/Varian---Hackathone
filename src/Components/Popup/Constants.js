import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';

let strings = new LocalizedStrings({

    EN:{
        defaultTitle: "Warning",
        defaultMessage: "Unknown error occured. Please try after some time.",
        defaultButton : "Ok"
    },

    MR: {
    }
});

strings.setLanguage(config.lang);

export default strings;