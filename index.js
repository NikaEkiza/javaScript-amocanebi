// first task
let userFirstName = 'nika';

console.log('Welcome ' + userFirstName);

// second task

let userBalance = 300;
let cartTotal = 400;

if(userBalance >= cartTotal) {
    let purchaceComplete = 'გადახდა წარმატებით შესრულდა';
    console.log(purchaceComplete);
} else {
    let x = cartTotal - userBalance;
    let purchaceComplete = 'თქვენ არ გაქვთ საკმარისი თანხა, გთხოვთ დამატებით ჩარიცხოთ ' + x + ' ლარი ოპერაციის დასასრულებლად';
    console.log(purchaceComplete);
}

// third task

let maxScore = 100;
let barrier = 60;
let studentScore = 50;

if(studentScore >= barrier) {
    let studentMessage = 'გილოცავთ, თქვენ გადალახეთ ' + barrier + ' ქულიანი ბარიერი ' + studentScore + '/' + maxScore + ' ქულით';
    console.log(studentMessage);
} else {
    let studentMessage = 'ვწუხვარ, თქვენ ვერ გადალახეთ ' + barrier + ' ქულიანი ბარიერი ' + studentScore + '/' + maxScore + ' ქულით';
    console.log(studentMessage);
}

// fourth task

let deliverDistance = 60;
const shippingIsPossoble = deliverDistance <= 50;

if(shippingIsPossoble) {
    let deliverMessage = 'თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არის';
    console.log(deliverMessage);
} else {
    let deliverMessage = 'თქვენს მისამართზე მიტანის სერვისი ხელმისაწვდომი არ არის';
    console.log(deliverMessage);
}

// fifth task

let userLoggedIn = true;
let userIsFemale = true;

if(userLoggedIn) {
    if(userIsFemale) {
        let helloMessage = 'სალამი ქალბატონო ქეთევან'
        console.log(helloMessage);
    } else {
        let helloMessage = 'სალამი ბატონო გიორგი'
        console.log(helloMessage);
    }
} else {
    if(userIsFemale) {
        let byeMessage = 'დროებით ქალბატონო ნინო'
        console.log(byeMessage);
    } else {
        let byeMessage = 'დროებით ბატონო მიშა'
        console.log(byeMessage);
    }
}

