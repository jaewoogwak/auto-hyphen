import { useState } from "react";

const IDnumber = () => {
  const [IDnumber, setIDnumber] = useState("");
  const onChange = (e) => {
    const value = e.target.value.replace(/\D+/g, "");
    const maxLength = 13;
    let result = "";
    for (let i = 0; i < value.length && i < maxLength; i++) {
      switch (i) {
        case 6:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }
    setIDnumber(result);
  };
  return (
    <div>
      <input
        type="tel"
        value={IDnumber}
        onChange={onChange}
        placeholder="주민등록번호"
      />
    </div>
  );
};

export default IDnumber;
