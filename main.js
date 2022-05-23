
// let stop_k = 0
// btn_start.addEventListener('click',()=>{
//     for (let i = 0 ;i<=500;i++){
//         btn_stop.addEventListener('click',()=>{
//             stop()
//         })
//         setTimeout(() => {
//             stop_k = i
//             box.style.cssText = 
//             `
//             margin-left: ${stop_k}px;
//             width:100px;
//             height:100px;
//             background-color:${c};
//             `
//             body.append(box)
//         }, i*5);
//     }
// })

// btn_color.addEventListener('click',()=>{
//     c = 'white'
// })

// function stop() {
//     box.style.cssText = 
//             `
//             margin-left: ${stop_k}px;
//             width:100px;
//             height:100px;
//             background-color:red;
//             `
//     body.append(box)
// }


let body = document.body
let btn_start = document.createElement('button')
let btn_stop = document.createElement('button')
let btn_spin = document.createElement('button')
let btn_color = document.createElement('button')
let buttons = document.createElement('div')
btn_start.innerHTML = 'START'
btn_stop.innerHTML = 'STOP'
btn_spin.innerHTML = 'SPIN'
btn_color.innerHTML = 'COLOR'
buttons.append(btn_start,btn_stop,btn_spin,btn_color)
buttons.classList.add('buttons')
body.append(buttons)


let box = document.createElement('div')
let s = 0;
let x = 0;
let y = 0;
let xi = 2;
let yi = 2;
let si = 1;
let color_r = 0;
let color_g = 0;
let color_b = 0;
let colori = 1;
box.style.cssText = 
`
top:${y}px;
left:${x}px;
position: absolute;
width: 100px;
height: 100px;
background-color:rgb(0, 0, 0);
transform: rotate(${s}deg);
`
body.append(box)


function go() {
    if ((x < 300)&&(y == 0)) {
        x = x+xi
    }
    if ((x <= 300)&&(y == 300)&&(x>=0)) {
        x = x-xi
    }
    if ((x == 300)&&(y < 300)) {
        y = y+yi
    }
    if ((x == 0)&&(y <= 300)) {
        y = y-yi
    }
    // console.log(x);
    box.style.left=x+'px'
    box.style.top=y+'px'
    body.append(box)
    setTimeout("go()",10)
}
function spin() {
    
    if (s < 90) {
        s = s+si
    }else {
        s=0
    }
    box.style.transform=`rotate(${s}deg)`
    body.append(box)
    setTimeout("spin()",1)
}

function color_func() {
    if ((color_r < 255)&&(color_g==0)&&(color_b==0)) {
        color_r = color_r+colori;
    }
    if ((color_r >= 255)&&(color_g < 255)&&(color_b==0)) {
        color_g = color_g+colori;
    }
    if ((color_r >= 255)&&(color_g>=255)&&(color_b < 255)) {
        color_b = color_b+colori;
    }
    if ((color_r >= 255)&&(color_g>=255)&&(color_b>=255)) {
        color_b = 0
        color_g = 0
        color_r = 0
    }
    box.style.backgroundColor=`rgb(${color_r}, ${color_g}, ${color_b})`
    body.append(box)
    // console.log(color_r);
    setTimeout("color_func()",1)
}

btn_start.addEventListener('click',()=>{
    xi=2;
    yi=2;
    go()
})
btn_spin.addEventListener('click',()=>{
    si=1;
    spin()
})
btn_stop.addEventListener('click',()=>{
    colori=0;
    si=0;
    xi=0;
    yi=0;
})
btn_color.addEventListener('click',()=>{
    colori=1;
    color_func()
})





