import { useState } from "react";
import { useStorage } from "../utils/useStorage";

const LocalStorage = () => {
  const [key, setKey] = useState<string | undefined>();
  const [value, setValue] = useState<string | undefined>();
  const [result, setResult] = useState<string | undefined>();
  const { getData, setData, clearAll, hasData, setAll, getAll } = useStorage();

  const handleGetAll = () => {
    if (!key) {
      alert("please Enter the Key!");
      return;
    }
    const arr = key?.split(",");
    let res: (string | null)[] = [];
    if (arr) res = getAll(arr);
    setResult(res?.toString());
  };
  return (
    <div className="inputBox">
      <div>
        <label htmlFor="key">Enter The Key</label>
        <input
          type="text"
          id="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="value">Enter The Value</label>
        <input
          type="text"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            if (key && value) {
              setData(key, value);
              setKey("");
              setValue("");
              alert("Key and value added successfully");
            } else {
              alert("Please Enter Both key and value");
            }
          }}
        >
          Set Data
        </button>
        <button
          onClick={() => {
            if (key) {
              const data = getData(key);
              if (data) {
                setResult(data);
              } else {
                alert("No data Found");
              }
            } else {
              alert("Please Enter the key ");
            }
          }}
        >
          GetData
        </button>
        <button onClick={handleGetAll}>GetAll</button>
      </div>
      <textarea name="Value" id="result" value={result}></textarea>
    </div>
  );
};
export default LocalStorage;
