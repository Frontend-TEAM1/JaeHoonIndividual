import { useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [musicList, setMusicList] = useState(PlayListMock.playlist);

  const [musicName, setMusicName] = useState("");

  const [singer, setSinger] = useState("");


  const handleAddMusic = () => {
    setMusicList((prev) => [
      ...prev,
      {
        musicName,
        singer,
      },
    ]);
    setMusicName("");
    setSinger("");
  };

  /*
  ...를 사용하여 기존 배열 내용을 모두 복사하고, 
   새로운 정보를 추가한 배열을 새로운 musicList로 업데이트

   setMusicName과 setSinger를 이용하여
   빈 문자열("")로 초기화 하여 입력된 값들을 초기화
  
  */

  const handleRemoveMusic = (index) => {
    setMusicList((prev) => prev.filter((item, i) => i !== index));
  };
  /*
  fiter 그냥 쓰고 =>뒤에서 안쓰면 알아서 무시됨.
  삭제할 곡의 인덱스를 매개변수로

  filter 함수에서 첫 번째 매개변수로는 현재 원소가 들어오고 
  두 번째 매개변수로는 해당 원소의 인덱스가
  
  filter() 메서드에서 첫 번째 매개변수는 배열 요소의 값
   매개변수 이름을 언더스코어 _로 지정하여 해당 값이 무시될 수 있도록.

   prev 배열을 인덱스 순서로 순회하면서,
   삭제할 인덱스 index를 제외한 모든 요소를 
   유지하는 새로운 배열을 반환
  */
 



  return (
    <>
      <h1>문제1</h1>
      <ul>
        {musicList.map((music, index) => (
          <li key={index}>
            <h3>{music.title}</h3>
            <p>{music.singer}</p>
            <button onClick={() => handleRemoveMusic(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input value={musicName} onChange={(e) => setMusicName(e.target.value)} />
        </p>
        <p>
          가수/작곡 : <input value={singer} onChange={(e) => setSinger(e.target.value)} />
        </p>
        <p>
          <button onClick={handleAddMusic}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
