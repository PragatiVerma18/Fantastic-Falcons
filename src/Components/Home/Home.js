import React from "react";
import Team from "../Team/Team";
function Home() {
  return (
    <>
      <img
        className="logo"
        src="https://user-images.githubusercontent.com/42115530/95915203-71448880-0dc4-11eb-875d-f47ea72f886a.png"
        alt="logo"
      />
      {/* https://user-images.githubusercontent.com/42115530/95913615-2295ef00-0dc2-11eb-8176-8d9783cf8b65.png */}
      <Team />
    </>
  );
}

export default Home;
