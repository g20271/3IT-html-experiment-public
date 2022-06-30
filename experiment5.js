function draw(){
    let canvas = document.getElementById("graph")
    let center_x = canvas.width/2, center_y = canvas.height/2

    let formula = document.getElementById('formula').value

    
    let scale = Number(document.getElementById("scale").value)
    let n = canvas.width/scale
    //const scale = 40


    
    let ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath()
    ctx.lineWidth=0.5
    ctx.strokeStyle="black"
    ctx.moveTo(center_x, 0)
    ctx.lineTo(center_x, canvas.height)
    ctx.moveTo(0, center_y)
    ctx.lineTo(canvas.width, center_y)
    ctx.stroke()

    ctx.lineWidth=0.4
    ctx.strokeStyle="gray"
    for (let x = center_x%scale; x < canvas.width; x += scale){
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
    }
    for (let y = center_y%scale; y < canvas.height; y += scale){
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
    }
    // for (let x = -1*scale; x > 0; x -= scale){
    //     ctx.moveTo(x, 0)
    //     ctx.lineTo(x, canvas.width)
    // }
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth=0.8
    ctx.strokeStyle="red"
    ctx.moveTo(-(n/2)*scale + center_x, calc(formula, -(n/2))*-1*scale + center_y)
    for (let x = -(n/2); x <= n/2; x+=0.1) {
        //console.log(x)
        //console.log(x + center_x, calc(formula, x)*-1 + center_y)
        ctx.lineTo(x*scale + center_x, calc(formula, x)*-1*scale + center_y)
    }
    //console.log(n/2, calc(formula, n/2)*-1)
    ctx.stroke()
        
}

function calc(formula, x){
    return new Function('return ' + formula.replace("x", "(" + x +" )"))()
}

let calculate_button = document.getElementById('calculate_button')
calculate_button.addEventListener('click', draw)

window.onload = function() {
    var canvas = document.getElementById("graph")
    var ctx = canvas.getContext("2d")
    function size_change() {
        canvas.width = document.documentElement.clientWidth - 10
        canvas.height = document.documentElement.clientHeight - 100
    }
    size_change()
    window.onresize = size_change
    draw()
}