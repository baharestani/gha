const core = require("@actions/core");

try {
  // const whoToGreet = core.getInput("who-to-greet");
  // console.log(`Hello, ${whoToGreet}!`);
  // core.setOutput("greeting", `Hello, ${whoToGreet}!`);
  console.log("Hello");
} catch (error) {
  core.setFailed(error.message);
}
