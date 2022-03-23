import { useEffect, useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [count, setCount] = useState(0);
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  console.log("render");
  const AutoInsertHyphen = () => {
    if ((input.length == 3 || input.length == 8) && key != "Backspace") {
      setInput((prev) => prev + "-");
      setCount((count) => count + 1);
    } else if ((input.length == 4 || input.length == 9) && key != "Backspace") {
      setInput((prev) => prev + "-" + key);
      setCount((count) => count + 1);
    }
  };
  console.log(input, "key:", key);

  useEffect(() => {
    AutoInsertHyphen();
  }, [input]);
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={(e) => setKey(e.key)}
        placeholder="전화번호"
        autoFocus
        maxLength={13}
      ></input>
    </div>
  );
};

export default Input;
