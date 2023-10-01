const tutors = require('../data/tutors.json');

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
  
const student = {
    id: "S1",
    preferences: ["Visual", "Morning"]
};

const subject = "Math";


const matchedTutors = matchMake(subject, student, tutors);
console.log(matchedTutors);
