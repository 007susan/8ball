/* Instead of switch/case, if/else-if could have been used instead:

 if(day === 'monday') {
    return 8;
  }
  else if (day === 'tuesday') {
    return 7;
  }
  else {
  } */

// Declare function getSleepHours with parameter named day
const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 4;
    case "Tuesday":
      return 7;
    case "Wednesday":
      return 8;
    case "Thursday":
      return 4;
    case "Friday":
      return 6;
    case "Saturday":
      return 10;
    case "Sunday":
      return 6;
  }
};

// Gets total amount of sleep hours the user slept for the week
const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

// Ideal Sleep hours should be 8 per day, calculated with 7 because there are 7 days a week
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

// Calculate sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  //Comparing actualSleepHours and idealSleepHours
  if (actualSleepHours === idealSleepHours) {
    console.log(
      "You have got " +
        actualSleepHours +
        " hours of sleep this week, it is a perfect amount."
    );
  }
  if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " hours more sleep than you needed this week."
    );
  }
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hours less sleep than you needed this week. Get some rest."
    );
  }
};

// Start the program
calculateSleepDebt();
