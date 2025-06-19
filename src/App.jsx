import React, { use, useActionState, useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Counter from "./components/Counter";
const App = () => {
  const [value, setValue] = useState(50);

  console.log("Component Render");

  return (
    <div>
      <Header />
      <section className="bg-red-200  w-2/3 h-[70vh] mx-auto">

       <Counter value={value}/>

        <div className="flex gap-2 mt-10 ">
          <Button
            bg="bg-green-400"
            text="Increment"
            onClick={() => setValue((prev) => prev + 1)}
          />
          <Button bg="bg-gray-600" text="Reset" onClick={() => setValue(0)} />
          <Button
            bg="bg-red-500"
            text="Decrement"
            onClick={() => setValue((prev) => prev - 1)}
          />
        </div>
      </section>
    </div>

    
  );
};

export default App;
