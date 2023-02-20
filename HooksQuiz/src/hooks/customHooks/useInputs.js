import { useState } from 'react';

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

};
return [values, onChange, setValues];
};

export default useInputs;
/*

onChange 함수 - input 값이 변경될 때마다
 호출되어 상태를 업데이트

event.target.name은 input 요소의 name 속성 값

event.target.value는 input 요소의 실제 입력 값

values는 현재 input 요소의 상태를 담고 있는 객체
 */