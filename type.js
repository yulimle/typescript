var limName = "lim";
var numArr = [1, 2, 3, 4];
var strArr = ["월", "화", "수"];
var comObj = {}; // 그냥 객체다
// 안에 내용까지 형식 설정
var limObject = {
    name: "lim",
    age: 26,
    hobbies: ["hi", "hello"],
};
// null, undefined
var nullData = null;
var undefinedData = undefined;
// Tuple
var tupleOne = [1, "lim", { isMember: true }];
// Enum : 데이터들의 이름 정해줌
var MemberGrade;
(function (MemberGrade) {
    MemberGrade[MemberGrade["guest"] = 0] = "guest";
    MemberGrade[MemberGrade["user"] = 1] = "user";
    MemberGrade[MemberGrade["member"] = 2] = "member";
    MemberGrade[MemberGrade["admin"] = 3] = "admin";
})(MemberGrade || (MemberGrade = {}));
var userGrade = 1; // fetch ~~ 값이 백에서 들어온다고 가정
// 의미 전달 차이
if (userGrade !== 3) {
    alert("관리자 아님");
}
if (userGrade !== MemberGrade.admin) {
    alert("관리자 아님");
}
// Union
// 데이터 타입을 유니온 으로 받아오는건 별로 (지양)
var unionType = 1;
var gender = "M";
// 함수 타입 설정
function add1(num1, num2) {
    return num1 + num2;
}
var add2 = function (num1, num2) {
    return num1 + num2;
};
var add3 = function (num1, num2) {
    return num1 + num2;
};
// void 타입 함수
function useConsole1(str) {
    console.log(str);
}
var useConsole2 = function (str) {
    console.log(str);
};
var useConsole3 = function (str) {
    console.log(str);
};
// never 타입 함수
function occurError(err) {
    throw new Error(err);
}
function infinite() {
    while (true)
        console.log("무한~~");
}
var dontKnow;
var studentGrade = "A";
var studentsGradeArr = ["A", "F", "C"];
var limInfo = {
    name: "이유림",
    id: "lim",
    age: 26,
    isMember: false,
    1: "A",
    2: "F",
};
var userData = [
    { name: "lee", id: "faker", age: 26, isMember: false },
    { name: "lee", id: "faker", age: 26, isMember: false },
];
var interfaceAdd = function (x, y) {
    return x + y;
};
var interfaceAdd2 = function (x, y) {
    return x + y;
};
var sumResult = interfaceAdd(1, 3);
console.log(sumResult);
