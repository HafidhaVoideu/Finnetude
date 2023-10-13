import AlphaPlatform from "./scenes/sections/AlphaPlatform";
import Footer from "./scenes/globals/Footer";
import Header from "./scenes/globals/Header";
import Contact from "./scenes/sections/Contact";
import Home from "./scenes/sections/Home";
import Solutions from "./scenes/sections/Solutions";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <AlphaPlatform />
      <Solutions />
      <Contact></Contact>
      <Footer />
    </div>
  );
}

export default App;
