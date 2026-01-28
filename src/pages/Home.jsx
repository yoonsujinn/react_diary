import { useState, useContext } from "react";
import { DiaryStateContext } from "../App"; //모든 일기데이터


import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList"

const getMonthlyData = (pivotDate, data) => {
  //현재 날짜의 1일 ~ 마지막 일
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, 0, 0, 0).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, 23, 59, 59).getTime();

  // 이번달 안에 작성된 데이터를 filter로 걸어냄
  return data.filter((item) => 
    beginTime <= item.createdDate && item.createdDate <= endTime
  
);

}


const Home = () => {
  const data = useContext(DiaryStateContext); //모든 일기데이터
  const [pivotDate, setPivotDate] = useState(new Date());  //날짜를 저장하는 state이다.
  const MonthlyData = getMonthlyData(pivotDate, data) // 현재 달

  //현재 날짜를 불러와서, 지금 달보다 +1을 해서 onIncreaseMonth 저장한다.
  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    )
  };

  //현재 날짜를 불러와서 지금 달보다 -1를 해서 onIncreaseMonth 저장한다.
  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    )
  };

  return <div>
    <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={
        <Button onClick={onDecreaseMonth}
          text={"<"}
        />
      }
      rightChild={
        <Button onClick={onIncreaseMonth}
          text={">"}
        />}
    />
    <DiaryList data={MonthlyData}/>
  </div>
}
export default Home;