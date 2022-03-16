alert("My name is Salman");
console.log("%c My age is 18", 'color: red');
console.log("%c I'm in grade 12", 'color: red');
// جافاسكريبت ليست كجافا
let budget = 20;
console.log(budget > 30 && budget < 80);
budget += 30;
console.log(budget > 30 && budget < 80);

let grade = prompt("Enter your degree: ");
if (grade >= 90 && grade <= 100){
    console.log("لقد حصلت على امتياز 🥳");
}else if (grade >= 80 && grade <= 89){
    console.log("لقد حصلت على جيد جداً🤩");
}else if (grade >= 70 && grade <= 79){
    console.log("لقد حصلت على جيد🙂");
}else if (grade >= 60 && grade <= 69){
    console.log("لقد حصلت على مقبول😕");
}else if (grade >= 50 && grade <= 59){
    console.log("لقد حصلت على ضعيف☹️");
}else if (grade < 50){
    console.log("راسب💔");
}

// using switch

let grade_1 = 0
var user = prompt("Enter your degree: ");

switch(user){
    case user >= 90 && user <= 100:
        grade_1 = "لقد حصلت على امتياز 🥳";
        console.log(grade_1);
        break;
    case user >= 80 && user <= 89:
        grade_1 = "لقد حصلت على جيد جداً🤩";
        console.log(grade_1);
        break;
    case user >= 70 && user <= 79:
        grade_1 = "لقد حصلت على جيد🙂";
        console.log(grade_1);
        break;
    case user >= 60 && user <= 69:
        grade_1 = "لقد حصلت على مقبول😕";
        console.log(grade_1);
        break;
    case user >= 50 && user <= 59:
        grade_1 = "لقد حصلت على ضعيف☹️";
        console.log(grade_1);
        break;
    case user < 50:
        grade_1 = "راسب💔";
        console.log(grade_1);
}
/* Ok, I wrote the codes but no respose has appeared for (switch) part, so plz help me on this part,
what's wrong??*/