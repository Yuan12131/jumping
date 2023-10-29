const express = require('express');
const app = express();
const fs = require('fs');

const port = 8019; // 사용할 포트 번호

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static('static'));

// 루트 경로로 접근시 index.html 파일 전송
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// CSS 파일 요청에 대한 응답
app.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/static/style.css');
});

// JavaScript 파일 요청에 대한 응답
app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/static/script.js');
});

// 404 오류 페이지 설정
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버 가동중 -> http://localhost:${port}/`);
});