import { useState } from "react";

const Phone = () => {
  const [phoneNum, setPhoneNum] = useState("");

  const onChange = (e) => {
    // 숫자만 입력하게 해줌 (정규식)
    let value = e.target.value.replace(/\D+/g, "");
    const maxLength = 11;
    let result = "";
    // 입력한 숫자 11자리(전화번호)로 루핑
    // result라는 새로운 문자열을 만들어서 전화번호 하나씩 넣어줌
    // 전화번호 4,8자리 앞에 하이픈 삽입
    for (let i = 0; i < value.length && i < maxLength; i++) {
      switch (i) {
        case 3:
          result += "-";
          break;
        case 7:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    setPhoneNum(result);
  };

  return (
    <div>
      <input
        value={phoneNum}
        onChange={onChange}
        type="tel"
        placeholder="전화번호"
        autoFocus
        maxLength={13}
      ></input>
    </div>
  );
};

export default Phone;
