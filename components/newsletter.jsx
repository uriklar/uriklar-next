import { useState } from "react";
import axios from "axios";

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-8 border-gray-500 border-solid border rounded-sm mt-8">
      <h2 className="text-3xl font-bold text-center">
        I also have a newsletter!
      </h2>
      <p
        className="mt-2 font-light w-4/5 text-center leading-relaxed"
        style={{ textDecoration: "line-through" }}
      >
        It includes intersting stuff about tech and will arrive to your mailbox
        no more than once every 2 weeks
      </p>
      <p className="mt-2 font-light w-4/5 text-center leading-relaxed">
        I don't maintain this newsletter anymore, but if you want a tutorial on
        how I built it and integrated it in my site you can watch it here:
        <a
          href="https://www.youtube.com/watch?v=Rzlop3Bgk1Q"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline ml-1"
        >
          &nbsp;YouTube Tutorial
        </a>
      </p>
      <div className="flex w-1/2 lg:w-2/3 justify-center mt-5 flex-col lg:flex-row">
        <input
          className="appearance-none mb-2 lg:mb-0 w-full lg:w-2/3 border border-gray-500 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-gray-600 opacity-50 cursor-not-allowed"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={true}
        />
        <button
          className={`lg:ml-2 shadow bg-brand2 focus:shadow-outline focus:outline-none text-center text-white font-bold py-2 px-4 rounded flex opacity-50 cursor-not-allowed ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={true}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
};
