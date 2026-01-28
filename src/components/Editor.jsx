import "./css/Editor.css";
import "./EmotionItem";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {emotionList} from "../util/constants";
import {getStringedDate} from "../util/get-stringed-date";

const Editor = ({initData, onSubmit}) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
      //input data는 항상 문자열을 반환하기 때문에 date로 변환해야함.
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  let nav = useNavigate();

  // 수정할때 원래 들어있던 데이터를 불러오는 기능
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          value={getStringedDate(input.createdDate)}
          name="createdDate"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              isSelected={item.emotionId === input.emotionId}
              {...item}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text="취소하기" onClick={() => nav(-1)} />
        <Button
          text="작성완료"
          onClick={onClickSubmitButton}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};
export default Editor;
