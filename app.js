/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
let notify = document.querySelector('#notify');
let issues = [];

/*
You'll probably find this function useful...
 */

function IssueTracker(){
this.issues = [];
}
IssueTracker.prototype = {
  add: function(issue){
    this.issues.push(issue);
  },

  retrieve: function(){
    let message = "";

    switch (issues.length) {
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

let firtPassIssueTracker = new IssueTracker();
let secondPassIssueTracker = new IssueTracker();



submit.onclick = function() {

  let firstPassword = firstPasswordInput.value;
  let secondPassword = secondPasswordInput.value;

  function checkRequirements() {

    if (firstPassword.legth > 100) {
      firtPassIssueTracker.add("pass is longer than 100");
    } else if (firstPassword.length < 16) {
      firtPassIssueTracker.add("pass is shorter than 16");
    }

    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
      firtPassIssueTracker.add("a symbol is required");
    }

    if (!firstPassword.match(/\d/g)) {
      firtPassIssueTracker.add("your pass must have a number");
    }

    if (!firstPassword.match(/[a-z]/g)) {
      firtPassIssueTracker.add("your pass must have a lowercase letter");
    }

    if (!firstPassword.match(/[A-A]/g)) {
      firtPassIssueTracker.add("your pass must have an uppercase letter");
    }
  };


function showIssues(issuesCopy){

  for(issue in issuesCopy){
    notify.innerHTML += issues[issue];
    console.log(issues[issue]);
  }
}
checkRequirements();
let issuesCopy = issues;

showIssues(issuesCopy);

};
