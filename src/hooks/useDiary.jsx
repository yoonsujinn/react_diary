import {useContext, useState, useEffect} from "react";
import {DiaryStateContext} from "../App";
import {useNavigate} from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext); //모든 데이터
  const [curDiaryItem, setCurDiaryItem] = useState(null); //불러온 일기 아이템을 저장하는 state
  const nav = useNavigate();

  useEffect(() => {
    //일기 수정할때 원래 담겨져 있던 내용들을 불러오는 기능
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", {replace: true});
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);
  return curDiaryItem;
};

export default useDiary;
