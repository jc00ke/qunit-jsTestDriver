app = {};

app.Person = function() {};

app.Person.prototype.speak = function(words) {
    return words;
};

app.Person.prototype.fail = function() {
    return "Don't you believe in me?";
};
