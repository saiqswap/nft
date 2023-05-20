// Set the security variable to true
var security = true;

window.addEventListener('contextmenu', function(event) {
  // Prevent right-clicking if security is enabled
  if (security) {
    event.preventDefault();
  }
});

// Override the console.log method to prevent viewing the debugger
if (security) {
  var originalLog = console.log;
  console.log = function() {
    if (typeof arguments[0] === 'string' && arguments[0].indexOf('debugger') > -1) {
      // Show a custom message instead of the debugger
      originalLog('Debugging is not allowed.');
    } else {
      originalLog.apply(console, arguments);
    }
  };
}
