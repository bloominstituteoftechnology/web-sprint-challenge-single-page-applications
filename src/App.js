import React, {useState} from "react";
import Homepage from "./Homepage"

const App = () => {
  const [homePage, setHomePage] = useState([])
  return (
   <Homepage homePage={homePage} setHomePage={setHomePage} />
  );
};
export default App;
