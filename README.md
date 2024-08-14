# 🏆프로젝트명

2024 파리 올림픽 메달 현황판🥇🥈🥉

## 소개 및 구현기능

### 2024 파리 올림픽에서 각 나라가 획득한 메달 수를 추적하는 Olympic Medal Tracker 입니다.

- 링크 : https://jjjangsh.github.io/react-olympic-medal-tracker/

- 상태 관리 : 여러 컴포넌트에서 간단한 상태를 관리하는 데 useState훅을 사용했고 상태가 변경될 때마다 컴포넌트가 리렌더링 됩니다.

- 제출 폼 UI : 나라 이름과 금, 은, 동 메달 수를 입력할 수 있는 폼

- 메달 집계 CRUD :

  - **Create** : 새로운 나라와 그 나라가 획득한 메달 수를 추가합니다.

    - 국가명을 아무것도 적지 않으면 추가되지 않습니다.<br/>
      (국가명은 정규식을 통해 input에서 특수문자, 공백, 숫자는 막아두어 혼란을 방지합니다)
    - 금, 은, 동메달의 개수를 음수로 추가할 수 없습니다.<br/>
      (각각의 메달 input에서 min = 0 속성으로 최소 개수는 0으로 설정합니다)<br/>
      (각각의 메달 input에서 max = 100 속성으로 최대 개수는 100으로 설정합니다)
    - 이미 추가되어 있는 국가는 다시 추가되지 않습니다.

  - **Read** : 나라별 메달 집계 리스트를 보여줍니다.

    - 금메달 개수를 기준으로 내림차순 정렬되어 보여집니다.
    - 금메달의 개수가 같으면 은메달 개수를 기준으로 내림차순 정렬되어 보여집니다.
    - 은메달의 개수가 같으면 동메달 개수를 기준으로 내림차순 정렬되어 보여집니다.

  - **Update** : 기존에 추가된 나라의 메달 수를 수정할 수 있습니다.

    - 기존에 추가되어 있지 않은 나라 일 때는, 업데이트 기능이 실행되지 않습니다.

  - **Delete** : 나라 정보를 삭제할 수 있습니다.

    - 삭제 버튼을 누르면 confirm을 통해 다시 한번 확인할 수 있도록 상호작용합니다.

## 📸 스크린샷

![메인](https://github.com/user-attachments/assets/2696b2d7-cdb2-4330-8eb8-0b33a8e52b61)
![추가](https://github.com/user-attachments/assets/d025ed9b-262a-47d8-97b3-7004ce6da5a1)

## 🛠️기술스택

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
