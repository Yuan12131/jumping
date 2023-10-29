# jumping

심플한 점프 게임
1. 일정한 속도로 나아가는 박스
2. 박스의 밑에는 바닥처럼 보이는 일자로 된 선이 존재
3. 선은 랜덤하게 박스크기만큼 끊겨있는 형태
4. 스페이스바를 누르면 박스가 점프
5. 선이 끊긴 부분을 지날 때 점프하지 않으면 바닥이 끊긴 곳으로 떨어져 게임 오버

SERVING
: local server 구축

HTML 
: 캐릭터 박스
: 바닥이 될 선

javascript
: addEventListenr + setInterval로 점프 구현
: setInterval로 바닥 낭떠러지 구현
: 캐릭터의 위치와 바닥의 위치를 계산한 함수로 GAMEOVER 판단