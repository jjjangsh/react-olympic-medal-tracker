import React, { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import CountryMedalList from "./components/CountryMedalList";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 현황🌍</h1>

      <MedalForm countries={countries} setCountries={setCountries} />
      {countries.length > 0 ? (
        <CountryMedalList countries={countries} setCountries={setCountries} />
      ) : (
        <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
      )}
    </div>
  );
};

export default App;
