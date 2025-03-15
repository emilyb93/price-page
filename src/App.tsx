import "./App.css";

import Subtitle from "./components/atoms/Subtitle/Subtitle";
import Header from "./components/atoms/Title/Title";

import PricingCardContainer from "./components/organisms/PricingCardContainer/PricingCardContainer";

function App() {
  return (
    <main className="app-container">
      <Header />
      <Subtitle />
      <PricingCardContainer />
    </main>
  );
}

export default App;
