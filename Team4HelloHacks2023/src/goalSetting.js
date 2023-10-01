const student = require('../data/student.json');

for (let i = 0; i < student.badgeGoals.subject; i++) {
  const studentHoursForSubject = studentHours[i];

  if (studentHoursForSubject >= 250) {
    badgesEarned.push(`${subject} Master`);
  } else if (studentHoursForSubject >= 150) {
    badgesEarned.push(`${subject} Expert`);
  } else if (studentHoursForSubject >= 80) {
    badgesEarned.push(`${subject} Advanced`);
  } else if (studentHoursForSubject >= 30) {
    badgesEarned.push(`${subject} Intermediate`);
  } else if (studentHoursForSubject >= 10) {
    badgesEarned.push(`${subject} Novice`);
  } else if (studentHoursForSubject >= 1) {
    badgesEarned.push(`${subject} Beginner`);
  }
}
let i=36;
