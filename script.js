const generateBtn = document.getElementById('generate-btn');
const hexNumber = document.querySelector('.hex-value');

generateBtn.addEventListener('click', () => {
    let randomHex = (Math.random() * 0xfffff * 1000000).toString(16);
    hexNumber.innerHTML = '#' + randomHex.slice(0, 6);
    document.body.style.background = '#' + randomHex.slice(0, 6);
})