import TicTacToe from "./components/TicTacToe/TicTacToe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Wrapper from "./components/utils/Wrapper/Wrapper";
import Stack from "./components/utils/Stack/Stack";

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
