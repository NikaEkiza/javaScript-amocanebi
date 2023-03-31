// sixth task

let userQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

if(userQuestions.length > 25) {
    let userMessage = 'შემდეგი კითხვის დასმას შეძლებთ 3 საათში';
    console.log(userMessage);
}

// seventh task

let userWeights = [85,80,75,];
let goal = 65;

let currentWeight = userWeights[userWeights.length - 1];
let remainingWeightLoss = currentWeight - goal;

console.log(`შედეგის მიღწევამდე დაგრჩა ${remainingWeightLoss} კილო`);

// eighth task

let gigosTestResults = [7,6,8,5,8,17];

let firstScore = gigosTestResults[0];
let lastScore = gigosTestResults[gigosTestResults.length - 1];
let scoreDifference = lastScore - firstScore;

if(scoreDifference < 10) {
    console.log('რავიცი, ნიჭიერია მარა ზარმაცი');
} else if(scoreDifference > 10) {
    console.log('კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ');
} else if(scoreDifference <= 10) {
    console.log('უხ გიგო გიგოოო');
}

// ninth task

