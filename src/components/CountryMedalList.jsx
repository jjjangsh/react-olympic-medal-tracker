import React from "react";

const CountryList = ({ countries, setCountries }) => {
  // confirm을 통해 정말 삭제할건지 상호작용
  const deleteCountryHandler = (id) => {
    const isConfirmed = window.confirm("삭제하시겠습니까?");
    if (isConfirmed) {
      setCountries(countries.filter((country) => country.id !== id));
    }
  };

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
            .sort((a, b) => {
              if (b.gold !== a.gold) {
                return b.gold - a.gold;
              } else if (b.silver !== a.silver) {
                return b.silver - a.silver;
              } else {
                return b.bronze - a.bronze;
              }
            })
            .map((country) => (
              <tr key={country.id}>
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
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
