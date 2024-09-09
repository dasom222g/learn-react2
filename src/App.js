import Card from "./components/Card";

function App() {
  // logic
  console.log("App.js");

  // const name = "후츠릿";
  // const age = 34;

  // 안녕하세요. 후츠릿님! 나이가 34세 이시네요.
  // 환영합니다!

  //   const grettingMessage = `안녕하세요. ${name}님! 나이가 ${age}세 이시네요.
  // 환영합니다!`;

  /**
   * Logical operators
   * 단축 평가 논리 계산법
   */

  const user = {
    isLoggedIn: true,
    role: "admin", // 'guest', 'user'
  };

  // 사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리지 페이지 접근 가능", 아니면 "관리지 페이지 접근 불가능"
  if (!user.isLoggedIn || user.role !== "admin") {
    console.log("관리자 페이지 접근 가능");
  } else {
    console.log("관리자 페이지 접근 불가능!!");
  }

  const user2 = {
    id: "dasom222g",
    password: "password",
    isLoggedIn: false,
  };

  const userInput = "";

  if (user2.id !== "dasom222g" && user2.password === "password") {
    // 1차 조건 판별
    user2.isLoggedIn = true;
    if (userInput) {
      // 사용자 입력값이 있는 경우
    } else {
      // 사용자 입력값이 없는 경우
    }
  }

  // Default parameter

  // 함수 정의
  const greeting = (input = "고객") => {
    return `${input}님, 반갑습니다!`;
  };
  // 함수 호출
  greeting();

  // 배열구조분해 할당
  const studentList = ["김태욱", "정세헌"];
  const [firstStudent = "장현재", secondStudent] = studentList;
  console.log("🚀 ~ secondStudent:", secondStudent);
  console.log("🚀 ~ App ~ firstStudent:", firstStudent);

  const addStudent = () => {
    const addStudentList = [...studentList, "장현재22"];
    console.log("🚀addStudentList:", addStudentList);
    console.log("studentList", studentList);
  };

  addStudent();

  // 객체 구조분해 할당
  const person = {
    name: "후츠릿",
    age: 34,
    email: "chutzrit@gmail.com",
  };

  const messageItem = {
    messageId: 1,
    message: "안녕하세요",
  };

  const { name: personName } = person;
  console.log("🚀~ personName:", personName);

  const copyPeroson = {
    ...person,
    ...messageItem,
    name: "김다솜", // 값 수정
    nickName: "후츠릿", // 값 추가
  };
  console.log("🚀 ~ copyPeroson:", copyPeroson);

  // view
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
