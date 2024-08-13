import React from 'react';

const CountryMedalRow = ({ country, deleteCountryHandler }) => {
  return (
    <tr>
      <td>{country.country}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <button
          className="deleteBtn"
          onClick={() => deleteCountryHandler(country.id)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default CountryMedalRow;
