import LocalizedStrings from 'react-localization';
import {config} from '../../utils/config';


let strings = new LocalizedStrings({

    EN:{
    header: "Hiring Assignment for - Varian",
    Show: "Show",
    Error: "Error",
    BadGateway : "Bad GateWay",
    NetworkFailure: "Seems Like Internet connection is not available, Check your wifi cable or restart router",

    },

    FR: {
    how:"Come vuoi il tuo uovo oggi?",
    boiledEgg:"Uovo sodo",
    softBoiledEgg:"Uovo alla coque",
    choice:"Come scegliere l'uovo"
    }
});

strings.setLanguage(config.lang);

export default strings;