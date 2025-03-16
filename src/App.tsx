import "./App.css";

import Subtitle from "./components/atoms/Subtitle/Subtitle";
import Header from "./components/atoms/Title/Title";

import PricingCardContainer from "./components/organisms/PricingCardContainer/PricingCardContainer";

function App() {
  return (
    <main className="app-container">
      <div>
        <Header />
        <Subtitle />
      </div>
      <PricingCardContainer />
    </main>
  );
}

export default App;
