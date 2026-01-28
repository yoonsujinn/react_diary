import {useEffect} from "react";

//매개변수로 title값을 받아서 title글씨를 바꾼다.
//useEffect로 title의 글씨가 변경되었을때도 업데이트 한다.
const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};
export default usePageTitle;
