let button; 

let sparkle;

let angle = 0

let  fortunes = ["Your future is full of possibilities and exciting adventures.",
  "Your intuition will guide you towards success and happiness.",
  "You have the power to make your dreams a reality. Believe in yourself.",
  "A new chapter in your life is about to begin. Embrace it.",
  "Your inner strength will help you overcome any obstacles.",
  "An important decision is coming your way. Trust your instincts.",
  "You will meet someone who will change your life for the better.",
  "Good things come to those who work hard. Keep pushing forward.",
  "Your creative talents will lead you towards great success.",
  "The universe is on your side. Everything will work out in your favor.",
  "Your kindness and generosity will be rewarded tenfold.",
  "Opportunities are coming your way. Be ready to seize them.",
  "Your persistence and dedication will pay off in the long run.",
  "Your greatest dreams are within reach. Keep reaching for the stars.",
  "You will make new and meaningful connections with people.",
  "Success and happiness are just around the corner. Keep going.",
  "A new adventure is waiting for you. Embrace the unknown.",
  "You are capable of achieving great things. Never give up.",
  "The future is bright and full of promise. Embrace it.",
  "Your hard work and determination will lead you to success.",
  "You will find peace and happiness within yourself.",
  "Your positive attitude and outlook will lead you to success.",
  "Believe in yourself and your abilities. You are capable of great things.",
  "Your unique talents and abilities will lead you to success.",
  "The universe has great things in store for you. Keep an open mind.",
  "Your greatest achievements are yet to come. Keep pushing forward.",
  "Your kindness and compassion will attract abundance into your life.",
  "Your perseverance and resilience will lead you towards great success.",
  "You have the power to make a difference in the world. Use it wisely.",
  "Your future is full of exciting opportunities and adventures.",
  "Your success is just around the corner. Keep moving forward.",
  "You will soon discover a new passion that will lead you towards success.",
  "Your optimism and positivity will attract success and abundance.",
  "You have the strength and courage to overcome any challenge.",
  "Your dedication and hard work will lead you to great things.",
  "Your creativity and imagination will lead you towards great success.",
  "Believe in yourself and your abilities. You are capable of achieving anything.",
  "Your unique talents and abilities will lead you towards great success.",
  "Your future is full of promise and possibility. Embrace it.",
  "You will soon discover a new path that will lead you towards success and happiness.",
  "Your hard work and determination will pay off in the long run.",
  "Your positive attitude and outlook will lead you towards great success.",
  "Your intuition and inner wisdom will guide you towards success and happiness.",
  "You have the power to make a difference in the world. Use it wisely.",
  "Your creativity and imagination will lead you towards great things.",
  "Your success is just around the corner. Keep pushing forward.",
  "You will soon meet someone who will have a profound impact on your life.",
  "Your dedication and hard work will lead you to success and fulfillment.",
  "Believe in yourself and your abilities. You are capable of achieving anything.",
  "Your perseverance and resilience will lead you towards success and happiness."]

  function preload(){
    //sparkle = loadImage('assets/sparkle.png');
  }

function setup() {
  createCanvas(windowWidth, windowHeight );

 

 //sparkle = createImg(sparkle,200,200,20,20);

  button = createImg('crystal.png');  
  button.size(200,200)
  button.position(windowWidth/2-100,windowHeight/2+120);


  button.mouseClicked(tell);

  
 
}

function draw() {
  background(0);

  
  fill(255);
rectMode(CENTER);
rect(windowWidth/2, windowHeight/2, 600,200);


 
textSize(40);
fill(179,255,63);
text('CL1CK THE 0RB TO REV3AL UR FUTUR3', 333+33,222);
rotateX(angle); 

//if(button.mouseClicked === true){
 // (tell)
//} 
//else{

//}
}




function tell(){

    let fortune = random(fortunes);
  console.log(fortune);
  push()
  fill(0);
  textSize(16);
  text(fortune, windowWidth/2-100, windowHeight/2);
  pop();
}


//need help with making fortune text disappear after it appears 
