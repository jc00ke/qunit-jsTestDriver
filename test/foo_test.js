module("Person");

test("speaks", function() {
    var p = new app.Person();
    expect(1);
    var words = "Hi there";
    equals(p.speak(words), words, "expect the person to say the words");
});

test("fails", function() {
    var p = new app.Person();
    expect(1);
    equals(p.fail(), "Don't you believe in me?", "have faith!");
});
