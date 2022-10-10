

var canvas=new fabric.Canvas("id")
//un simple espaciador
var bola_x=20
var bola_y=20
var hoyo_x=400
var hoyo_y=800
//Establece las posiciónes para la pelota y el agujero.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(img){
	hole_obj=img;
hole_obj.scaleToWidth(50);
hole_obj.scaleToHeight(50);
hole_obj.set({
	top:hoyo_y,
	left:hoyo_x
});
canvas.add(hole_obj);	
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(img){
		ball_obj=img;
	ball_obj.scaleToWidth(50);
	ball_obj.scaleToHeight(50);
	ball_obj.set({
		top:bola_y,
		left:bola_x
	});
	canvas.add(ball_obj)
});
	

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((bola_x==hoyo_x)&&(bola_y==hoyo_y)){
		canvas.remove(ball_obj)
		document.getElementById("el").innerHTML="lo lograste :)";
		document.getElementById("id").style.borderColor="orange"

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		
		bola_y=bola_y-block_image_height;
canvas.remove(ball_obj);
		new_image();
	}

	function down()
	{

bola_y=bola_y+block_image_height;
canvas.remove(ball_obj);
	new_image();
	}

	function left()
	{

			
			bola_x=bola_x-block_image_height
			canvas.remove(ball_obj);
			new_image();
	
	}

	function right()
	{
		if(bola_x <=1050)
		{
			bola_x=bola_x+block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

