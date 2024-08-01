import React, { useState } from "react";
import { categoriesData } from "../data/categories";

export default function QuoteGenerator() {
  const [choice, setChoice] = useState();
  const [quoteData, setQuoteData] = useState([]);

  //Handling Choice
  const handleChoice = (choice) => {
    setChoice(choice);
    console.log(choice);
  };

  //Getting single Quote
  const handleGetQuote = () => {
    if (!choice) {
      alert("Select a Quote Category");
    } else {
      const url = `https://api.api-ninjas.com/v1/quotes?category=${choice}`;
      fetch(url, {
        headers: { "X-Api-key": "wA8YR4uFnn6OznQcv/7t6A==Sk7YoAYBu4AvGN2O" },
      })
        .then((res) => res.json())
        .then((data) => setQuoteData(data[0]));
    }
  };

  return (
    <>
      <div className="bg-slate-200 h-[100vh] flex justify-center items-center">
        <div className=" bg-gray-100 border-2 h-[480px] w-[400px] rounded-2xl flex flex-col justify-between p-2">
          <div className="w-[95%] self-center h-96 flex items-center text-center justify-center flex-col">
            <div>
              <p className="font-bold text-4xl h-30 my-5">Quotes of the day</p>
              <hr />

              <p className="h-56 fle text-[1.2rem] italic mt-9 overflow-hidden">
                {quoteData.quote && (
                  <span className="font-extrabold italic font-serif text-2xl">
                    {" "}
                    "{" "}
                  </span>
                )}
                {quoteData.quote}
                {quoteData.quote && (
                  <span className="font-extrabold italic font-serif text-2xl">
                    {" "}
                    "{" "}
                  </span>
                )}
              </p>
            </div>
            <div className="  w-full text-right pr-5 ">
              <hr />
              <p className="h-10 font-bold italic text-[1.2rem]">
                {quoteData.author && <span>-- </span>}
                {quoteData.author}
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <select
              onChange={(e) => handleChoice(e.target.value)}
              className="appearance-none bg-blue-200 p-2 px-3 rounded-lg mb-2 outline-none w-[170px] bg-[url('../../public/icon-down.png')] bg-no-repeat bg-[145px] font-semibold "
            >
              <option className="hidden">Select a Category</option>
              {categoriesData.map((data) => (
                <option key={Date.now()} className="outline-none ">
                  {data}
                </option>
              ))}
            </select>
            <button
              className="bg-blue-200 p-2 px-3 rounded-lg mb-2 ml-4 w-36 font-semibold"
              onClick={handleGetQuote}
              //   disabled={true}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
