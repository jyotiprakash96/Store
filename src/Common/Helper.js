const { Dimensions } = require("react-native");

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight= Dimensions.get('window').height;
export const Colors={
    primary:'#13303c',
    secondary:'#0db5cf',
    white:'#fff',
    green:'#0f0',
    red:'#f00'
}
export const password_regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,16}$/;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

