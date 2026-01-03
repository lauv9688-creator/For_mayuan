// // poem
// var words=[
//     '祝你遇见好天气！',
//     '祝愿新的一年马源心想事成，成功上岸！'
// ];
// function randomNum(min,max){
//     var num = (Math.random()*(max-min+1)+min).toFixed(2);
//     return num;
// }
// function init(){
//     let container = document.querySelector('.container');
//     let f = document.createDocumentFragment();
//     words.forEach(w=>{
//     let word_box = document.createElement('div');
//     let word = document.createElement('div');
//         word.innerText = w;
//         word.classList.add('word');
//         word.style.color = '#BAABDA';
//         word.style.fontFamily = '楷体';
//         word.style.fontSize = '20px'
//         word_box.classList.add('word-box');
//         word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
//         word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
//         word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
//         word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
//         word_box.appendChild(word);
//         f.appendChild(word_box);


//     })
//     container.appendChild(f);
// }
// window.addEventListener('load',init);
// let textone = document.querySelector('.textone').querySelector('h1');
//       let texttwo = document.querySelector('.texttwo').querySelector('h1');
//       let textthree = document.querySelector('.textthree').querySelector('h1');

//       setTimeout(function(){
//         textone.innerHTML = '今晚，整片星空将为你一人闪烁';
//           textone.style.color = '#E8F9FD';
//           textone.style.fontFamily = '楷体'
//           texttwo.style.color = '#E8F9FD';
//           texttwo.style.fontFamily = '楷体'
//           textthree.style.color = '#E8F9FD';
//           textthree.style.fontFamily = '楷体'
//           texttwo.innerHTML = '';
//       },28000)
//       setTimeout(function(){
//         textone.innerHTML = '从前从前,有个人爱你很久';
//         texttwo.innerHTML = '但偏偏，风渐渐';
//         textthree.innerHTML = '把距离吹的好远';
//       },112500)

// // 解决自动播放限制：监听用户的第一次点击事件来触发音乐
// document.addEventListener('click', function() {
//     let audio = document.querySelector('audio');
//     if (audio.paused) {
//         audio.play();
//     }
// }, { once: true }); // once: true 表示这个监听器只执行一次，播放后就销毁
 

// poem
var words=[
    '祝你遇见好天气！',
    '祝你看见不同的景色！',
    '祝你自由自在！',
    '祝你历尽千帆上岸！'
];

function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}

function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);
    })
    container.appendChild(f);

    // --- 音乐播放核心逻辑 (修改部分) ---
    let audio = document.querySelector('audio');
    
    // 1. 尝试直接自动播放
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // 如果自动播放成功，这里什么都不用做
            console.log("自动播放成功");
        }).catch(error => {
            // 2. 如果自动播放被浏览器拦截（报错），则添加点击监听作为备份
            console.log("自动播放被拦截，等待用户点击...");
            document.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
}

window.addEventListener('load',init);

let textone = document.querySelector('.textone').querySelector('h1');
let texttwo = document.querySelector('.texttwo').querySelector('h1');
let textthree = document.querySelector('.textthree').querySelector('h1');

setTimeout(function(){
    textone.innerHTML = '今晚，整片星空将为你一人闪烁，祝马源常如愿，长幸福';
    textone.style.fontFamily = '楷体'
    texttwo.style.color = '#E8F9FD';
    texttwo.style.fontFamily = '楷体'
    textthree.style.color = '#E8F9FD';
    textthree.style.fontFamily = '楷体'
    texttwo.innerHTML = '';
},28000)

setTimeout(function(){
    textone.innerHTML = '从前从前,有个人爱你很久';
    texttwo.innerHTML = '但偏偏，风渐渐';
    textthree.innerHTML = '把距离吹的好远';
},112500)
