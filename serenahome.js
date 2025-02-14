const images = document.querySelectorAll('.rotating-image');
const numberOfImages = images.length;
const radius = 250; // 원의 반지름
let currentRotation = 0; // 현재 회전 각도

// 원형 배치를 위한 이미지의 초기 각도 설정
const angleStep = 360 / numberOfImages;

// 이미지들의 초기 배치
images.forEach((image, index) => {
    const angle = angleStep * index;
    const radians = angle * (Math.PI / 180); // 각도를 라디안으로 변환

    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    // 각 이미지의 위치를 원형으로 배치
    image.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
});

// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
    const scrollSpeed = window.scrollY; // 현재 스크롤 위치

    // 스크롤 위치에 따라 회전 각도를 변화시킴
    currentRotation = (scrollSpeed * 0.3) % 360; // 스크롤에 맞춰 회전 각도 업데이트

    images.forEach((image, index) => {
        const angle = angleStep * index + currentRotation; // 회전 각도에 따라 이미지 위치 업데이트
        const radians = angle * (Math.PI / 180); // 각도를 라디안으로 변환

        const x = radius * Math.cos(radians);
        const y = radius * Math.sin(radians);

        // 이미지가 원형 경로를 따라 이동
        image.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });
});

// 메뉴 버튼과 팝업, 닫기 버튼을 가져옵니다.
const menuButton = document.getElementById('menuButton');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// 메뉴 버튼 클릭 시 팝업을 열기
menuButton.addEventListener('click', function() {
    popup.style.display = 'flex';  // 팝업을 보이게 설정
});

// 닫기 버튼 클릭 시 팝업을 닫기
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';  // 팝업을 숨기기
});
