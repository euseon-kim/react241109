import logo from './logo.svg';
import './App.css';
import Step01 from './step/step01';
import Step02 from './step/step02';

function App() {
  return (
    <>
    {/* 컴포넌트 : 재사용 가능한 코드 조각(버튼, 이미지, 텍스트 ... ) */}
      {/* <Comp />
      <Comp />
      <Comp />
      <Comp />
      <Comp />
      <Step01></Step01> */}
      <Step02 />
    </>
    
  );
}

// 작명 시에 영어대문자로 시작
// 함수 표현식, 함수 선언식 둘 다 가능

function Comp() {
  return <div>컴포넌트</div>
}
export default App;

