import React from 'react';
import CountryMedalRow from './CountryMedalRow';

const CountryList = ({ countries, deleteCountryHandler }) => {
  return (
    <div className="resultBox">
      <table className="resultTable">
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달🥇</th>
            <th>은메달🥈</th>
            <th>동메달🥉</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .sort((a, b) => b.gold - a.gold)
            .map((country) => (
              <CountryMedalRow
                key={country.id}
                country={country}
                deleteCountryHandler={deleteCountryHandler}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
