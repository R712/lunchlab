//
//  미리보기용 스크립트
//
document.cookies = 'key=value';
const Nav = document.querySelector('.nav');
const Brand = document.querySelector('h1.brand');
const pageBody = document.querySelector('body');
let layerDetail = document.querySelector('.layer');
let toastOrder = document.querySelector('.toast');
let llLoader = document.querySelector('.ll-loader');
let menuPreviewWrap = document.querySelector('.menu-week-inner');

//
//  토스트 토글
//  + 레이어가 열려있을 경우 닫으며 토글
//
toastToggle = () => {
    if (layerDetail.classList.contains('fade')) {
        layerDetail.classList.remove('fade');
        pageBody.classList.remove('scrollx');
    }
    toastOrder.classList.toggle('fade');
    pageBody.classList.toggle('scrollx');
}

//
//  레이어 토글
//
layerToggle = () => {
    layerDetail.classList.toggle('fade');
    pageBody.classList.toggle('scrollx');
}
layerLineupToggle = () => {
    document.querySelector('.layer[data-layer=lineup').classList.toggle('fade');
    pageBody.classList.toggle('scrollx');
}
layerSignup = () => {
    document.querySelector('.layer[data-layer=signup').classList.toggle('fade');
    pageBody.classList.toggle('scrollx');
}

//
//  로더 토글
//
loaderDelay = setTime => {
    setTimeout(() => llLoader.classList.toggle('fade'), setTime);
    setTimeout(() => pageBody.classList.remove('scrollx'), setTime);
}

//
//  만족했어요 버튼 토글
//
isLiked = target => {
    target.classList.toggle('is-liked');
}

menuWeekNext = () => {
    menuPreviewWrap.scrollLeft += 120;
}

menuWeekPrev = () => {
    menuPreviewWrap.scrollLeft -= 120;
}

linkReady = () => {
    location.href = 'ready.html';
}
linkPreview = () => {
    location.href = 'menu.html';
}

//
//  오늘 날짜와 요일
//
const jsDate = document.querySelector('.js-date');
let today = new Date();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();
let week = ['일', '월', '화', '수', '목', '금', '토'];
writeDate = () => {
    jsDate.innerText = month + '월 ' + date + '일 ' + week[day] + '요일';
}

// for WOW scroll effect
new WOW().init();