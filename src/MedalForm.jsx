import React from 'react';

const MedalForm = ({
  nation,
  setNation,
  goldMedal,
  setGoldMedal,
  silverMedal,
  setSilverMedal,
  bronzeMedal,
  setBronzeMedal,
  addCountryHandler,
  updateCountryHandler,
}) => {
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
                onChange={(e) => setNation(e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                value={goldMedal}
                onChange={(e) => setGoldMedal(Number(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                value={silverMedal}
                onChange={(e) => setSilverMedal(Number(e.target.value))}
              />
            </td>
            <td>
              <input
                type="number"
                value={bronzeMedal}
                onChange={(e) => setBronzeMedal(Number(e.target.value))}
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
