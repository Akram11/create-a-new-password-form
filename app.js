var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
let notify = document.querySelector('#notify');
let issues = [];


function IssueTracker(){
this.issues = [];
}
IssueTracker.prototype = {
  add: function(issue){
    this.issues.push(issue);
  },

  retrieve: function(){
    let message = "";
    switch (this.issues.length) {
      case 0:
        break;
      case 1:
      message = "Please fix the following issue:\n" + this.issues[0];
      break;
      default:
      message = "Please fix the following issues:\n" + this.issues.join('\n');
      break;
    }
    return message;
  }
};


submit.onclick = function() {

  let firstPassword = firstPasswordInput.value;
  let secondPassword = secondPasswordInput.value;


  let firstPassIssueTracker = new IssueTracker();
  let secondPassIssueTracker = new IssueTracker();

  function checkRequirements() {

    if (firstPassword.legth > 100) {
      firstPassIssueTracker.add("pass is longer than 100");
    } else if (firstPassword.length < 16) {
      firstPassIssueTracker.add("pass is shorter than 16");
    }

    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
      firstPassIssueTracker.add("a symbol is required");
    }

    if (!firstPassword.match(/\d/g)) {
      firstPassIssueTracker.add("your pass must have a number");
    }

    if (!firstPassword.match(/[a-z]/g)) {
      firstPassIssueTracker.add("your pass must have a lowercase letter");
    }

    if (!firstPassword.match(/[A-A]/g)) {
      firstPassIssueTracker.add("your pass must have an uppercase letter");
    }
  };


  if (firstPassword.length > 0 && firstPassword === secondPassword) {
    checkRequirements();
  }else{
    secondPassIssueTracker.add("passwords don't match!");
  }


  let firstIssues = firstPassIssueTracker.retrieve();
  let secondIssues = secondPassIssueTracker.retrieve();

firstPasswordInput.setCustomValidity(firstIssues);
secondPasswordInput.setCustomValidity(secondIssues);

if(firstIssues.length + secondIssues.length === 0){
  alert("new password has been saved!");
}

};
