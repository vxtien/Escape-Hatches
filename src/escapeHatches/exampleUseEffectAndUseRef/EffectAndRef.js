import { useState } from "react";
import MyInput from "./MyInput";
const EffectAndRef = () => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [upper, setUpper] = useState(false);
  const name = firstName + "" + lastName;
  const handleShow = () => {
    setShow((s) => !s);
  };
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  return (
    <>
      <button onClick={handleShow}>{show ? "Hiden" : "Show"} form</button>    
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={handleChangeFirstName}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={handleChangeLastName}
              shouldFocus={false}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
            /> Make it uppercase
          </label>
          <p>
            Hello, <b>{upper ? name.toUpperCase() : name}</b>
          </p>
        </>
      )}
    </>
  );
};
export default EffectAndRef;
