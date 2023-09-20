import {
  Loader,
  Services,
  Footer,
  Transection,
  Welcome,
  Navbar,
} from "./Componenets";

import { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        {/* <Header /> */}
        <Navbar />
        <Welcome />
      </div>
      jkj;k jlkjkka;lk;kj flkasjlk
      <div>
        <Services />
        <Transection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
