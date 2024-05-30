//verificar caracteres solo permitidos de la A-Z y a-z
 const isAlpha = (str) => {
    return /^[a-zA-Z]+$/.test(str);
    }
//verificar caracteres solo permitidos de la A-Z y a-z y numeros
 const isAlphaNumeric = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str);
    }
//verificar caracteres solo permitidos de la A-Z y a-z y numeros y espacio
 const isAlphaNumericSpace = (str) => {
    return /^[a-zA-Z0-9 ]+$/.test(str);
    }
//verificar caracteres solo permitidos de la A-Z y a-z y numeros y espacio y guion
 const isAlphaNumericSpaceGuion = (str) => {
    return /^[a-zA-Z0-9 -]+$/.test(str);
    }
//verificar caracteres solo permitidos de la A-Z y a-z y numeros y espacio y guion y punto
function isAlphaNumericSpaceGuionPunto(str) {
    return /^[a-zA-Z0-9 .-]+$/.test(str);
    }
//verificar caracteres solo permitidos de la A-Z y a-z y numeros y espacio y guion y punto y arroba
//solo enteros positivos
function onlyPositiveIntegers(str) {
    int = parseInt(str);
    if(int > 0){
        return true;
    }
    return false;
    }

module.exports = {onlyPositiveIntegers,isAlpha, isAlphaNumeric, isAlphaNumericSpace, isAlphaNumericSpaceGuion, isAlphaNumericSpaceGuionPunto};