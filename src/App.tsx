import React, { useState } from "react";
import { Dropdown } from "./components/Dropdown";
import { dropDownValues, values } from "./myDataFile";
import "./styles.scss";


const App = () => {

  const [ dropDownValues, setDropDown ] = useState({} as dropDownValues[])

  console.log(dropDownValues)

  return (
    <div className="body">
      <Dropdown
        onSelect={(test: string) => {
          console.log('select callback implemented')
        }}
        localValues={dropDownValues}
        values={values}
        setValues={setDropDown}
      />
    </div>
  );
}

export default App;
