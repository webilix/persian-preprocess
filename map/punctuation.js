module.exports = {
    basic: '" \' » « ! ” # $ % & ’ ( ) \\* + , \\- . \\/ \\^ : ; < = > ? @ ` | \\{  \\} ~ \\[ \\] \\\\ _',
    mark: '\n \r \t \0',
    diacritic:
        String.fromCharCode(1569) +
        ' ' +
        String.fromCharCode(1611) +
        ' ' +
        String.fromCharCode(1612) +
        ' ' +
        String.fromCharCode(1613) +
        ' ' +
        String.fromCharCode(1614) +
        ' ' +
        String.fromCharCode(1615) +
        ' ' +
        String.fromCharCode(1616) +
        ' ' +
        String.fromCharCode(1617) +
        ' ' +
        String.fromCharCode(1618) +
        ' ' +
        String.fromCharCode(1619) +
        ' ' +
        String.fromCharCode(1620) +
        ' ' +
        String.fromCharCode(1621) +
        ' ' +
        String.fromCharCode(1648),
    unicode:
        String.fromCharCode(127) /** DELETE */ +
        ' ' +
        String.fromCharCode(8204) /** ZERO WIDTH NON-JOINER */ +
        ' ' +
        String.fromCharCode(8205) /** ZERO WIDTH JOINER */ +
        ' ' +
        String.fromCharCode(8206) /** LEFT-TO-RIGHT MARK */ +
        ' ' +
        String.fromCharCode(8207) /** RIGHT-TO-LEFT MARK */ +
        ' ' +
        String.fromCharCode(8419) /** COMBINING ENCLOSING KEYCAP */ +
        ' ' +
        String.fromCharCode(65039) /** VARIATION SELECTOR-16 */
};
