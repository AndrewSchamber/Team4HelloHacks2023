const badges = require('../data/badges.json');
const student = {
    hours: 100,
    badgesEarned: []   
};
for (let i = 0; i < subjects.length; i++) {
  const studentHoursForSubject = studentHours[i];
  const subject = subjects[i];

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