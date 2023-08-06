// Hour

// 1- If hour is between 6am and 12pm: Good morning!

// 2- If it is between 12pm and 6pm: Good afternoon!

// 3- Otherwise: Good evening!

const hour = 1;

if (hour >= 6 && hour < 12) {
  console.log("good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon!");
} else if (hour >= 18 && hour < 21) {
  console.log("good evening!");
} else {
  console.log("good night!");
}

// Switch...Case

let role = "moderator";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}

if (role === "guest") console.log("Guest User");
else if (role === "moderator") console.log("Moderator User");
else console.log("Unknown User");

//  Using if/else statements are shorter and easier to read than switch/case statements.
