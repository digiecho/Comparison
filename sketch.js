let companyName; 
let beforeandafter;
let baf = "Before";
let before = "Before";
let after = "After";
let colorPicker;
let button;
let button2;
let cwidth = 960;
let cheight = 540;
let img; 
let img2; 
let Aimg;
let smaller;
let input; 
let input2;
let nextImage = false;

let slider;
let buffer; 


function preload() {
//   img = loadImage("before.jpg");
// img2= loadImage("after.jpg");  
  
  //load Gif
  smaller = loadImage('fairy.gif');
  
}


function setup() {         
  let c = createCanvas(cwidth, cheight)
  buffer = createGraphics(1920,1080)
  frameRate(30)
  // c.drop(gotFile);
    // input before and after images
  input = createFileInput(handleFile);
  input.position(300, height +50);
  // text = Text("Before");
  // text.position(300, height +20);

  input2 = createFileInput(handleFile2);
  input2.position(600, height +50);

  
//create button to reset animation/frame rate
  button = createButton('Replay');
  button.position(0,height + 110);
  button.mouseClicked(clicked);
  
  //create button to record


  //create slider for text size
  slider = createSlider(0, 100, 70);
  slider.position(0, height + 50);
  
  //create text fields
  
  //create dragable objects with font and color 
  let cnt = "Pixie Dust";
  let cntWidth = textWidth(cnt)
  companyName = new Draggable(cnt, 10, 10, 400, 200);
  beforeandafter = new Draggable(baf, 10, 450, 200, 200);
  textFont("Dancing Script")
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(0, height + 5);  
  

}



function clicked() {
  console.log("button pressed")
  frameCount = 0; 
  smaller.reset();
  nextImage = false;
}

       
function draw() {
           
 buffer.background(255)

  let val = slider.value();
  textSize(val);       
   
  if (img ) { 
      buffer.image(img, 0, 0, 1920, 1080);    
    
    if (frameCount == 60) {
        nextImage = true; 
      }
      
    if(nextImage){
        buffer.image(img2, 0, 0, 1920, 1080);
      }
 
  }

  let frame = smaller.getCurrentFrame();
         
      if (frameCount <= 120){             
            buffer.image(smaller, 0, 0, 1920, 1080);                  
            text(frameCount, width / 2, height / 2)
          } 
  image(buffer, 0, 0, cwidth, cheight);
          
if (frameCount >= 60){
   baf = after; 
  }else{
    baf = before;
}
  companyName.over();
  companyName.update();
  let company = companyName.show();
  buffer.company;
  beforeandafter.over();
  beforeandafter.update(baf);
 let bef = beforeandafter.show(); 
  buffer.bef;
  

}

function mousePressed() {
  companyName.pressed();
  beforeandafter.pressed();

}

function mouseReleased() {
  companyName.released();
  beforeandafter.released();
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = loadImage(file.data, '');
    
    //img.hide();
    
  }
}
function handleFile2(file) {
  print(file);
  if (file.type === 'image') {
    img2 = loadImage(file.data, '');
    //img2.hide();
    
  } else {
    img2 = null;
  }
}
                               
