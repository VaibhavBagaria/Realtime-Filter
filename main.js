function preload(){

} 

function setup() {
    canvas=createCanvas(400,400)
    canvas.center()
    Video=createCapture(VIDEO)
    Video.hide()

}

function draw() {
    image(Video,0,0,400,400)
}

function Take_Snapshot(){
    save("Moustashe.png")
}