import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400">
        Tailwind CSS
      </h1>
      <Card userName="mihir" button="maghia" />
      <Card userName="sameer" button="banda" />
      <Card userName="liku" button="bia" />
    </>
  );
};

export default App;
