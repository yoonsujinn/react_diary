import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import usePageTitle from "../hooks/usePageTitle";
import useDiary from "../hooks/useDiary";

import {DiaryDispatchContext, DiaryStateContext} from "../App";
import {useParams, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기 수정`);

  //일기 삭제하는 기능
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구 되지 않아요!")) {
      onDelete(params.id);
      nav("/", {replace: true});
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", {replace: true});
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
