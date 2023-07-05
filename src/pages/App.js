import Header from "../components/Header";
import CoffeeControl from "../components/CoffeeControl";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div class="container">
        <div class="first">
          <div class="second">
            <Header />
            <CoffeeControl />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
