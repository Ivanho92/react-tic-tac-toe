import TicTacToe from "./components/TicTacToe/TicTacToe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Wrapper from "./components/layout/Wrapper/Wrapper";
import Stack from "./components/layout/Stack/Stack";

const App = () => {
  return (
    <div className="app">
      <Stack gap="sm">
        <Header />
        <main>
          <Wrapper>
            <TicTacToe />
          </Wrapper>
        </main>
      </Stack>
      <Footer />
    </div>
  );
};

export default App;
