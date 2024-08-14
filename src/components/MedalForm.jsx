import React, { useState } from "react";
import { v4 as uuid } from "uuid";

// 특수문자, 공백, 숫자 제외시키기
const REG = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ 0-9]/gim;

const MedalForm = ({ countries, setCountries }) => {
  const [nation, setNation] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  // 국가명 적었는지 확인
  // 국가명은 onChange에서 정규식을 이용해 특수문자, 공백, 숫자를 막았기 때문에 아무것도 안적은지만 확인
  // 등록 되어있는 국가인지 확인 후 추가 혹은 이미 존재한다고 상호작용
  // 모두 처리 후 input 초기화
  const addCountryHandler = (e) => {
    e.preventDefault();

    if (nation === "") {
      alert("국가명을 입력하세요.");
      return;
    }

    const countryExists = countries.some(
      (country) => country.country === nation
    );
    if (countryExists) {
      alert("이미 존재하는 국가입니다.");
      resetInputs(); // 추가된 부분
      return;
    }

    const newCountry = {
      id: uuid(),
      country: nation,
      gold: Number(goldMedal),
      silver: Number(silverMedal),
      bronze: Number(bronzeMedal)
    };

    setCountries([...countries, newCountry]);
    resetInputs();
  };

  // 국가명 적었는지 확인
  // 등록 되어있는 국가인지 확인 후 업데이트
  // 아니라면 국가 추가 먼저하라는 상호작용
  // 모두 처리 후 input 초기화
  const updateCountryHandler = (e) => {
    e.preventDefault();

    if (nation === "") {
      alert("국가명을 입력하세요");
      return;
    }

    const alreadyExCountry = countries.find(
      (country) => country.country === nation
    );

    if (alreadyExCountry) {
      setCountries(
        countries.map((country) =>
          country.country === nation
            ? {
                ...country,
                gold: Number(goldMedal),
                silver: Number(silverMedal),
                bronze: Number(bronzeMedal)
              }
            : country
        )
      );
      resetInputs();
    } else {
      alert("등록되지 않은 국가입니다. 먼저 추가해 주세요.");
      resetInputs(); // 추가된 부분
    }
  };

  // 추가, 업데이트 후 초기화
  const resetInputs = () => {
    setNation("");
    setGoldMedal(0);
    setSilverMedal(0);
    setBronzeMedal(0);
  };

  return (
    <form className="input-group" onSubmit={addCountryHandler}>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달🥇</th>
            <th>은메달🥈</th>
            <th>동메달🥉</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                placeholder="국가명을 입력하세요."
                value={nation}
                onChange={(e) => setNation(e.target.value.replace(REG, ""))}
              />
            </td>
            <td>
              <input
                min={0}
                max={100}
                type="number"
                value={goldMedal}
                onChange={(e) => setGoldMedal(Number(e.target.value))}
                onFocus={(e) => e.target.value === "0" && setGoldMedal("")}
              />
            </td>
            <td>
              <input
                min={0}
                max={100}
                type="number"
                value={silverMedal}
                onChange={(e) => setSilverMedal(Number(e.target.value))}
                onFocus={(e) => e.target.value === "0" && setSilverMedal("")}
              />
            </td>
            <td>
              <input
                min={0}
                max={100}
                type="number"
                value={bronzeMedal}
                onChange={(e) => setBronzeMedal(Number(e.target.value))}
                onFocus={(e) => e.target.value === "0" && setBronzeMedal("")}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="formBtn" type="submit">
        국가추가
      </button>
      <button className="formBtn" type="button" onClick={updateCountryHandler}>
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
