var AllGreetings;
(function (AllGreetings) {
    var Greetings;
    (function (Greetings) {
        function returnGreeting(greeting) {
            console.log("The message from namespace Greetings is " + greeting + ".");
        }
        Greetings.returnGreeting = returnGreeting;
    })(Greetings = AllGreetings.Greetings || (AllGreetings.Greetings = {}));
    var GreetingsWithLength;
    (function (GreetingsWithLength) {
        function returnGreeting(greeting) {
            var greetingLength = getLength(greeting);
            console.log("The message from namespace GreetingsWithLength is " + greeting + ". It is " + greetingLength + " characters long.");
        }
        GreetingsWithLength.returnGreeting = returnGreeting;
        function getLength(message) {
            return message.length;
        }
    })(GreetingsWithLength = AllGreetings.GreetingsWithLength || (AllGreetings.GreetingsWithLength = {}));
})(AllGreetings || (AllGreetings = {}));
// returnGreeting('Hello');                     // Returns error
// Greetings.returnGreeting('Bonjour');         // OK
// GreetingsWithLength.returnGreeting('Hola');  // OK 
AllGreetings.Greetings.returnGreeting('Bonjour'); // OK
AllGreetings.GreetingsWithLength.returnGreeting('Hola'); // OK 
var greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');
