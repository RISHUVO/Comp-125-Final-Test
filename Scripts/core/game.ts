let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext("2d");
     ctx.font = "30px Arial";
     ctx.fillText("Roll The Dice", 200, 50); 

     var grd = ctx.createRadialGradient(850, 500, 70, 900, 600, 1000);
     grd.addColorStop(0, "blue");
     grd.addColorStop(1, "white");
     
     // Fill with gradient
     ctx.fillStyle = grd;
     ctx.fillRect(0,0, 700, 800);
    let stage:createjs.Stage;
    
    let assets: createjs.LoadQueue;

    let exampleLabel: UIObjects.Label;
    let exampleButton: UIObjects.Button;
    

    let assetManifest = 
    [
        {id:"1", src:"./Assets/images/1.png"},
        {id:"2", src:"./Assets/images/2.png"},
        {id:"3", src:"./Assets/images/3.png"},
        {id:"4", src:"./Assets/images/4.png"},
        {id:"5", src:"./Assets/images/5.png"},
        {id:"6", src:"./Assets/images/6.png"},
        {id:"backButton", src:"./Assets/images/startButton.png"},
        {id:"background", src:"./Assets/images/background.png"},
        {id:"blank", src:"./Assets/images/blank.png"},
        {id:"button", src:"./Assets/images/button.png"},
        {id:"nextButton", src:"./Assets/images/nextButton.png"},
        {id:"placeholder", src:"./Assets/images/placeholder.png"},
        {id:"resetButton", src:"./Assets/images/resetButton.png"},
        {id:"rollButton", src:"./Assets/images/rollButton.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"startOverButton", src:"./Assets/images/startOverButton.png"}
    ];


    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start Function`, "color: grey; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config

        
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        stage.update();
    }

       
    
	

})();
    
     // This is the main function of the Game (where all the fun happens)
     

    var main = document.getElementById("mainContent");
    var div = document.createElement("div");
     div.setAttribute("id","dices");           
     main.appendChild(div);

     var div1 = document.createElement("div");
     div1.setAttribute("id","dice");           
     div.appendChild(div1);
    
     var dice1 = document.createElement("img");
     dice1.setAttribute("id","dice1"); 
     div1.appendChild(dice1);
    document.getElementById("dice1").setAttribute("src","./Assets/images/1.png");

    var div2 = document.createElement("div");
     div2.setAttribute("id","dice");           
     div.appendChild(div2);
    
     var dice2 = document.createElement("img");
     dice2.setAttribute("id","dice2"); 
     div2.appendChild(dice2);
    document.getElementById("dice2").setAttribute("src","./Assets/images/1.png");

    var div3 = document.createElement("div");
     div3.setAttribute("id","dice");           
     div.appendChild(div3);
    
     var dice3 = document.createElement("img");
     dice3.setAttribute("id","dice3"); 
     div3.appendChild(dice3);
    document.getElementById("dice3").setAttribute("src","./Assets/images/1.png");

    var div4 = document.createElement("div");
     div4.setAttribute("id","dice");           
     div.appendChild(div4);
    
     var dice4 = document.createElement("img");
     dice4.setAttribute("id","dice4"); 
     div4.appendChild(dice4);
    document.getElementById("dice4").setAttribute("src","./Assets/images/1.png");
    
    var value1 = document.createElement("p");
     value1.setAttribute("id","value1"); 
     div1.appendChild(value1);

    var value2 = document.createElement("p");
     value2.setAttribute("id","value2"); 
     div2.appendChild(value2);

     var value3 = document.createElement("p");
     value3.setAttribute("id","value3"); 
     div3.appendChild(value3);

    var value4 = document.createElement("p");
     value4.setAttribute("id","value4"); 
     div4.appendChild(value4);

     var result = document.createElement("p");
     result.setAttribute("id","result"); 
     main.appendChild(result);

     var btn = document.getElementById("roll");
    btn.addEventListener("click",function(evt){
        var soundID = "Thunder";
        createjs.Sound.registerSound("./Assets/sounds/click.mp3", soundID);
        createjs.Sound.play(soundID);

        var spin1 = Math.floor(Math.random() * 6) + 1;
        var dice1img = `./Assets/images/${spin1}.png`;
        document.getElementById("dice1").setAttribute("src", dice1img);
       document.getElementById("value1").innerHTML = spin1;
     
       var spin2 = Math.floor(Math.random() * 6) + 1;
       var dice2img = `./Assets/images/${spin2}.png`;
       document.getElementById("dice2").setAttribute("src", dice2img);
       document.getElementById("value2").innerHTML = spin2;
     
       var spin3 = Math.floor(Math.random() * 6) + 1;
       var dice3img = `./Assets/images/${spin3}.png`;
       document.getElementById("dice3").setAttribute("src", dice3img);
       document.getElementById("value3").innerHTML = spin3;
      
       var spin4 = Math.floor(Math.random() * 6) + 1;
       var dice4img = `./Assets/images/${spin4}.png`;
       document.getElementById("dice4").setAttribute("src", dice4img);
       document.getElementById("value4").innerHTML = spin4;
      
       var minNum = Math.min(spin1,spin2,spin3,spin4);
       var total = spin1 + spin2 + spin3 + spin4;
       total -= minNum;
       document.getElementById("result").innerHTML = `total result is ${total} <br><br> lowest dice drops`;
      // document.getElementById("drop").innerHTML = `lowest dice drops`;
     
     });