import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import ThemeButton from "./components/ThemeButton";

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

  const [title, setTitle] = useState("후츠릿 짱");

  const handleClick = () => {
    window.location.href = "https://www.naver.com/";
  };

  // 모드 변경 논리
  /**
  1. ThemeButton에 온클릭 이벤트를 만든다
  2. 버튼이 눌려졌다는 이벤트를 부모 컴포넌트에 전송한다.(onTheme)
  3. 부모 컴포넌트가 이벤트를 받으면 div 클래스를 변환하는 함수를 생성한다.(handleTheme)
  4. [state] isDarkMode라는 state를 생성한다.
  5. isDarkMode state에 따라 wrap클래스가 있는 div에 className의 속성을 다르게 넣어준다.
  5-1.다크모드인 경우엔 'dark-mode'라는 클래스를 준다.
  5-2. 다크모드가 아닌 경우엔 'light-mode'라는 클래스를 준다.
  6. handleTheme함수에서 isDarkMode의 값을 토글로 변경해준다.

  7. ThemeButton컴포넌트에 isDarkMode라는 props를 내려준다.
  7-1. 이 props에는 isDarkMode의 값을 넣어준다.
  8. ThemeButton컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 '다크 모드' false인 경우엔 '라이트 모드'라는 텍스트를 UI에 보여준다.


  9. 버튼을 클릭한다.
  10. 작동이 잘 되는지 바뀌는걸 확인한다.
   */

  // view
  return (
    <div className="wrap">
      <Card title={title} subText="서브 텍스트" onCardClick={handleClick} />
      <Card title={title} subText="서브 텍스트" onCardClick={handleClick} />
      {/* <Counter /> */}
      {/* ThemeButton 컴포넌트 */}
      <ThemeButton />
    </div>
  );
}

export default App;
