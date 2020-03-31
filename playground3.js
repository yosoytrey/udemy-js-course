
var formatNumber = function(num, type) {
    var numSplit, int, dec, sign;

    num = Math.abs(num);
    num = num.toFixed(2); //js converts the primitive to an object.

    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    type === 'exp' ? sign = '-' : sign = '+';

    return sign + ' ' + int + '.' + dec;
};

var n = 1234567;
var t = 'inc';
console.log(formatNumber(n,t))







var string1 = "Edureka JavaScript";
var substring1 = string1.substring(-1);
console.log('substring: ' + substring1);

var string2 = "Edureka JavaScript";
var substr2 = string2.substr(-1);
console.log('substr: ' + substr2); // starting point and how many positions to use (start at 8 and take 2 characters)

var string3 = "Edureka JavaScript";
var substr3 = string3.slice(-1);
console.log('slice: ' + substr3);
