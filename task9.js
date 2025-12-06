var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = x;
    let y = 0;

    while (x > 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x/10);
    }
    return original === y;
}

console.log(isPalindrome(121));