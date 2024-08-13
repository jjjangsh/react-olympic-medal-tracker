import React, { useState } from 'react';
import './App.css';
import MedalForm from './MedalForm';
import CountryMedalList from './CountryMedalList';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [nation, setNation] = useState('');
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  const addCountryHandler = (e) => {
    e.preventDefault();

    if (nation.trim() === '') {
      alert('국가명을 입력하세요.');
      return;
    }

    const countryExists = countries.some(
      (country) => country.country === nation.trim()
    );
    if (countryExists) {
      alert('이미 존재하는 국가입니다.');
      return;
    }

    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      alert('메달 수는 0보다 작을 수 없습니다.');
      return;
    }

    const newCountry = {
      id: uuid(),
      country: nation,
      gold: Number(goldMedal),
      silver: Number(silverMedal),
      bronze: Number(bronzeMedal),
    };

    setCountries([...countries, newCountry]);
    resetInputs();
  };

  const resetInputs = () => {
    setNation('');
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  const deleteCountryHandler = (id) => {
    const isConfirmed = window.confirm('삭제하시겠습니까?');
    if (isConfirmed) {
      setCountries(countries.filter((country) => country.id !== id));
    }
  };

  const updateCountryHandler = (e) => {
    e.preventDefault();

    if (nation.trim() === '') {
      alert('국가명을 입력하세요');
      return;
    }

    if (goldMedal < 0 || silverMedal < 0 || bronzeMedal < 0) {
      alert('메달 수는 0보다 작을 수 없습니다.');
      return;
    }

    const alreadyExCountry = countries.find(
      (country) => country.country === nation.trim()
    );

    if (alreadyExCountry) {
      setCountries(
        countries.map((country) =>
          country.country === nation.trim()
            ? {
                ...country,
                gold: Number(goldMedal),
                silver: Number(silverMedal),
                bronze: Number(bronzeMedal),
              }
            : country
        )
      );
      resetInputs();
    } else {
      alert('등록되지 않은 국가입니다. 먼저 추가해 주세요.');
    }
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 현황🌍</h1>
      <MedalForm
        nation={nation}
        setNation={setNation}
        goldMedal={goldMedal}
        setGoldMedal={setGoldMedal}
        silverMedal={silverMedal}
        setSilverMedal={setSilverMedal}
        bronzeMedal={bronzeMedal}
        setBronzeMedal={setBronzeMedal}
        addCountryHandler={addCountryHandler}
        updateCountryHandler={updateCountryHandler}
      />
      {countries.length > 0 && (
        <CountryMedalList
          countries={countries}
          deleteCountryHandler={deleteCountryHandler}
        />
      )}
    </div>
  );
};

export default App;
