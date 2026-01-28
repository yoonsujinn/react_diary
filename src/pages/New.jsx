import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import usePageTitle from "../hooks/usePageTitle";

import {DiaryDispatchContext} from "../App";

import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const New = () => {
  const {onCreate} = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", {replace: true});
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
