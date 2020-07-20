import React, {useState} from "react";
//import Homepage from "./Homepage"
import Form from "./Form"

const App = () => {
  const [homePage, setHomePage] = useState([])
  return (
   <Form homePage={homePage} setHomePage={setHomePage} />
  );
};
export default App;
