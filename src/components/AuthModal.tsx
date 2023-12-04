import React from "react";
import { PASS_KEY } from "../constants";

export default function AuthModal() {
  const [inputValue, setInputValue] = React.useState("");
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (inputValue === PASS_KEY) {
      localStorage.setItem("isAuth", "true");
      window.location.reload();
    }
  };
  return (
    <div className="w-screen h-screen bg-white">
      <form
        className="flex w-full h-full justify-center items-center flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          value={inputValue}
          className="border-2 border-gray-200 rounded-lg p-2"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
        "
        >
          Authenticate
        </button>
      </form>
    </div>
  );
}
