function calculate(){
    var a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById('b').value)
    let c = Number(document.getElementById('c').value)

    let d = (b**2)-(4*a*c)
    let discriminant = document.getElementById('discriminant')
    let solution = document.getElementById('solution')
    if (d > 0){
        discriminant.innerText = "異なる二つの実数解"

        let x1 = (-b + Math.sqrt(d))/2*a
        let x2 = (-b + Math.sqrt(d))/2*a

        solution.innerText = "x= " + x1 + ", " + x2

    }
    else if(d == 0){
        discriminant.innerText = "重解"

        let x1 = -b/2*a

        solution.innerText = "x= " + x1
    }
    else if(d < 0){
        discriminant.innerText = "実数解なし"

        let realnum = -b/2*a
        let imagnum = Math.sqrt(-d)/2*a

        solution.innerHTML = "x= " + realnum + " &plusmn; " + imagnum + "i" 
    }
}
