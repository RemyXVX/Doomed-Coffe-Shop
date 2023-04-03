import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="first">
          <div class="second">
            <Header />
            <CoffeeControl />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
