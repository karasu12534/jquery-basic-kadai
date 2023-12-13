const btn = document.getElementById('btn');

const btnText =document.getElementById('text');




btn.addEventListener('click',() => {
    // console.log('クリックされました');
     btnText.textContent = 'ボタンをクリックしました';
});