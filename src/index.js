module.exports = function check(str, bracketsConfig) {
    var temp = [];
    
    for (var i = 0, l = str.length; i < l; i++) {
        for (var j = 0, le = bracketsConfig.length; j < le; j++) {
            if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
                if (temp.indexOf(str[i]) === -1) {
                    temp.push(str[i]);
                } else {
                    if (temp[temp.length - 1] === bracketsConfig[j][0]) {
                        temp.pop();
                    } else {
                        return false;
                    }
                }
            } else if (str[i] === bracketsConfig[j][0]) {
                temp.push(str[i])
            } else if (str[i] === bracketsConfig[j][1]) {
                if (temp[temp.length - 1] === bracketsConfig[j][0]) {
                    temp.pop();
                } else {
                    return false;
                }
            }
        }
    }
    
    if (temp.length) {
        return false;
    } else {
        return true;
    }
}
