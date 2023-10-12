// 跑馬燈
var typed = new Typed(".typing", {
    strings: ["", "welcome to my portfolio!", "I'm learning web design..."],
    typeSpeed: 100,
    backspeed: 60,
    loop: true
})
const downloadBtn = $('#downloadBtn');
downloadBtn.click(function () {
    window.print();
});