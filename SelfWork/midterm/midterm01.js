let student = {   
    std1 : {
        id : 63130500046 , name : 'Thanakrit Paithun'
    }
}
let course = {
    term163 : {
        courseId:['GEN101','GEN121','INT100','INT101','INT102','INT114','LNG220'],
        credit:[1,3,3,3,1,3,3],
        grade:['A','B','B+','B+','A','A','B']
    },
    term263 : {
        courseId:['GEN111','INT103','INT104','INT105','INT107','INT200','LNG332'],
        credit:[3,3,3,1,3,1,3],
        grade:['B+','B','B+','A','B','A','A']
    }
}
let result = {
    term163 : {
        allCredit:17,
        gpax: 3.47 ,
        status:'Normal'
        },
    term263 : {
        allCredit:17,
        gpax: 3.47 ,
        status:'Normal'
    }
}
let info = {student , ...course , result};
console.log(info)

function allCredit(credits){
    let value=null;
    for (let index = 0 ; index < credits.length; index++){
        value += credits[index];
    }
    return `all credits: ${value}`;

}

console.log(allCredit(course.term163.credit))

function gpax(score){
    let grade=null;

    for (let index = 0; index < score.grade.length; index++) {
        if(score.grade[index] == 'A'){
            grade += score.credit[index]*4;
        }
        if(score.grade[index] == 'B+'){
            grade += score.credit[index]*3.5;
        }
        if(score.grade[index] == 'B'){
            grade += score.credit[index]*3;
        }
        if(score.grade[index] == 'C+'){
            grade += score.credit[index]*2.5;
        }
        if(score.grade[index] == 'C'){
            grade += score.credit[index]*2;
        }
        if(score.grade[index] == 'D+'){
            grade += score.credit[index]*1.5;
        }
        if(score.grade[index] == 'D'){
            grade += score.credit[index]*1;
        }
        if(score.grade[index] == 'F'){
            grade += 0;
        }
    }
    grade = grade/17;
    return `your gpax:${grade}`;
}
console.log(gpax(course.term163))



function allCreditValue(credits){
    let value = null;
    for (let index = 0; index < credits.credit.length; index++) {
        if(credits.grade == 'A' || 'B+' || 'B' || 'C+' || 'C' || 'D+' || 'D' || 'F' || 'Fa' || 'Fe')
            value += credits.credit[index];
    }
    return `all credits value: ${value}`;
}
console.log(allCreditValue(course.term163))

function allScore(score){
    let grade=null;
    for (let index = 0; index < score.grade.length; index++) {
        if(score.grade[index] == 'A'){
            grade += score.credit[index]*4;
        }
        if(score.grade[index] == 'B+'){
            grade += score.credit[index]*3.5;
        }
        if(score.grade[index] == 'B'){
            grade += score.credit[index]*3;
        }
        if(score.grade[index] == 'C+'){
            grade += score.credit[index]*2.5;
        }
        if(score.grade[index] == 'C'){
            grade += score.credit[index]*2;
        }
        if(score.grade[index] == 'D+'){
            grade += score.credit[index]*1.5;
        }
        if(score.grade[index] == 'D'){
            grade += score.credit[index]*1;
        }
        if(score.grade[index] == 'F'){
            grade += 0;
        }
    }
    return `your score:${grade}` ;
}
console.log(allScore(course.term163))






function creditAll(term163 , term263){
    let credits=null;
    for (let index = 0; index < term163.credit.length; index++) {
        if(term163.grade == 'A' || 'B+' || 'B' || 'C+' || 'C' || 'D+' || 'D' || 'S'){
            credits += term163.credit[index];
        }
    }
    for (let index = 0; index < term263.credit.length; index++) {
        if(term263.grade == 'A' || 'B+' || 'B' || 'C+' || 'C' || 'D+' || 'D' || 'S'){
            credits += term263.credit[index];
        }
    }
    return `your all credits : ${credits}`
}

console.log(creditAll(course.term163 , course.term263))



function statusCheck(status){
    if(status.gpax >= 2.00){
        status.status = 'Normal';
    }else if(status.gpax <2.00){
        status.status = 'Probation';
    }else if(status.gpax < 1.50){
        status.status = 'retire';
    }
    return `${status.status}`
}
console.log(statusCheck(result.term163))


