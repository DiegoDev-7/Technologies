const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 600

function estiloBlack() {
    ctx.fillStyle = "black"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.fill()
}

function estiloCyan() {
    ctx.fillStyle = "cyan"
    ctx.strokeStyle = "red"
    ctx.lineWidth = 2
    ctx.fill()
}



function cuadradO() {
    ctx.beginPath()
    ctx.moveTo(500, 200)
    ctx.lineTo(500, 400)
    ctx.lineTo(100, 400)
    ctx.lineTo(100, 200)
    ctx.closePath()
    estiloCyan()
}
cuadradO()


function conteX() {
    ctx.beginPath()
    ctx.moveTo(300, 300)
    ctx.lineTo(400, 330)
    ctx.lineTo(200, 330)
    ctx.closePath()

    ctx.lineJoin = "round"
    ctx.lineWidth = 20
    ctx.strokeStyle = "white"
    ctx.stroke()
    estiloBlack()
}
conteX();

function circle() {
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.lineWidth = 20
    ctx.arc(100, 100, 50, 0, Math.PI * 2, false)
    ctx.stroke
    ctx.closePath
}
circle()