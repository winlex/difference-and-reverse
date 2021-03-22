function reverse(string) {
    return string.length > 0 ? string.substr(string.length-1, 1) + '' + reverse(string.substr(0, string.length-1)) : '';
}

module.exports = reverse;