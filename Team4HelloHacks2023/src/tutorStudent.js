const tutors = require('../data/tutors.json');
const student = require('../data/student.json');

function matchMake(subject, student, tutors) {
    const matches = [];
    for (const tutor of tutors) {
      if (!tutor.subjects.includes(subject)) {
        continue;
      }
      let score = 0;
      for (const preference of student.preferences) {
        if (tutor.preferences.includes(preference)) {
          score++;
        }
      }
      matches.push({
        tutorId: tutor.id,
        score: score
      });
    }
    matches.sort((a, b) => b.score - a.score);
    return matches;
  }
  

const subject = "Math";

const matchedTutors = matchMake(subject, student, tutors);
console.log(matchedTutors);
