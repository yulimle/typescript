let limName: string = "lim";
let numArr: number[] = [1, 2, 3, 4];
let strArr: Array<string> = ["월", "화", "수"];
let comObj: object = {}; // 그냥 객체다
// 안에 내용까지 형식 설정
let limObject: { name: string; age: number; hobbies: string[] } = {
  name: "lim",
  age: 26,
  hobbies: ["hi", "hello"],
};

// null, undefined
let nullData: null = null;
let undefinedData: undefined = undefined;

// Tuple
let tupleOne: [number, string, object] = [1, "lim", { isMember: true }];

// Enum : 데이터들의 이름 정해줌
enum MemberGrade {
  guest = 0,
  user = 1,
  member = 2,
  admin = 3,
}

let userGrade: number = 1; // fetch ~~ 값이 백에서 들어온다고 가정

// 의미 전달 차이
if (userGrade !== 3) {
  alert("관리자 아님");
}
if (userGrade !== MemberGrade.admin) {
  alert("관리자 아님");
}

// Union
// 데이터 타입을 유니온 으로 받아오는건 별로 (지양)
let unionType: number | string | number[] = 1;

let gender: "M" | "F" = "M";

// 함수 타입 설정
function add1(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = function (num1: number, num2: number): number {
  return num1 + num2;
};

const add3 = (num1: number, num2: number): number => {
  return num1 + num2;
};

// void 타입 함수
function useConsole1(str: string): void {
  console.log(str);
}

const useConsole2 = function (str: string): void {
  console.log(str);
};

const useConsole3 = (str: string): void => {
  console.log(str);
};

// never 타입 함수
function occurError(err: string): never {
  throw new Error(err);
}

function infinite(): never {
  while (true) console.log("무한~~");
}

// Type 사용하기
type numOrStr = string | number;
let dontKnow: numOrStr;
type grade = "A" | "B" | "C" | "D" | "F";
let studentGrade: grade = "A";
let studentsGradeArr: grade[] = ["A", "F", "C"];

// Interface 사용하기
interface User {
  name: string;
  id: string;
  age: number;
  isMember?: boolean; // ?를 쓰면 필수는 아니라는 뜻
  [additional: number]: string;
}

let limInfo: User = {
  name: "이유림",
  id: "lim",
  age: 26,
  isMember: false,
  1: "A",
  2: "F",
};

let userData: User[] = [
  { name: "lee", id: "faker", age: 26, isMember: false },
  { name: "lee", id: "faker", age: 26, isMember: false },
];

// 함수에 interface 적용하기 => 함수 선언문에서는 이용 불가
interface Add {
  (num1: number, num2: number): number;
}

const interfaceAdd: Add = (x, y) => {
  return x + y;
};
const interfaceAdd2: Add = function (x, y) {
  return x + y;
};

const sumResult = interfaceAdd(1, 3);
console.log(sumResult);
