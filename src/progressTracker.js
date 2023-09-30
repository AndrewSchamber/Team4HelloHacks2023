const student = require('../data/student.json');

function trackProgress(student){

    for (const progress of student.badgesProgress) {
        const subjectInProgress = progress.subject;
        const hoursInProgress = progress.hours;

        // Find the corresponding badge goal for this subject
        const correspondingGoal = student.badgeGoals.find(goal => goal.subject === subjectInProgress);

        // Check if the subject exists in badgeGoals and has a level higher than 0
        if (correspondingGoal && correspondingGoal.level > 0) {
            switch(correspondingGoal.level){
                case 1:
                    percent = hoursInProgress/1*100;
                case 2:
                    percent = hoursInProgress/10*100;
                case 3:
                    percent = hoursInProgress/30*100;
                case 4:
                    percent = hoursInProgress/80*100;
                case 5:
                    percent = hoursInProgress/150*100;
                case 6:
                    percent = hoursInProgress/250*100;
            }
            console.log(`The subject ${subjectInProgress} is ${percent}%`);
        }
    }
}

trackProgress(student);