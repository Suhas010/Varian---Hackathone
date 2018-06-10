export default function compareData(obj, nextObj, keys) {
    if (!keys || !keys.length) {
        return false;
    }
    for (let i = 0; i < keys.length; i += 1) {
        if (JSON.stringify(obj[keys[i]]) !== JSON.stringify(nextObj[keys[i]])) {
            return true;
        }
    }
    return false;
}


export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
