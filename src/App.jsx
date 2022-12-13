import TicTacToe from "./components/TicTacToe/TicTacToe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Wrapper from "./components/utils/Wrapper/Wrapper";

const App = () => {
  return (
    <div className="app">
      <div>
        <Header />
        <main>
          <Wrapper>
            <TicTacToe />
          </Wrapper>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
