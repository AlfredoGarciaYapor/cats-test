import React from "react";
import CardBody from "./card/CardBody";
import Input from "./card/Inputs";
import { useState } from "react";

const Body = () => {
  const [inputValue, setInputValue] = useState({ name: "" });
  const { name } = inputValue;
  const [nameForCard, setNameForCard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContinue = (event) => {
    setNameForCard(name)
    event.preventDefault();
  }

  return (
    <>
      <div className="App bg-[#aea8a8]  h-screen flex flex-col justify-center items-center">
        <div className=" m-3 flex flex-col h-full w-full items-center ">
          <form className="my-8 flex items-center justify-center" onSubmit={handleContinue}>
            <Input
              type="text"
              value={name}
              placeholder="Write your name here"
              label="Name:"
              name="name"
              onChange={handleChange}
            />
            <button
              type="submit"
              onClick={handleContinue}
              className="text-white mx-3 bg-[#02DAFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </form>

          <CardBody name={nameForCard}/>
          
        </div>
        
      </div>
    </>
  );
};

export default Body;
