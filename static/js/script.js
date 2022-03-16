/*var sum=0;
var button2=document.createElement("button");
 button2.setAttribute("id","exit");
 var text2=document.createTextNode("Exit");
 button2.appendChild(text2);

 var button_tryagain=document.createElement('button');
 button_tryagain.setAttribute('id','tryagain');
 var text_try= document.createTextNode("try again ");
 button_tryagain.appendChild(text_try);

 var data={
 'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src
 }
 


 button_tryagain.onclick=function again(){
     document.getElementById('flexbox').innerHTML="";
     var rockimg,paperimg,scissorimg;
     rockimg=document.createElement('img');
     rockimg.setAttribute('src',data['rock']);
     rockimg.setAttribute('id','rock');
     paperimg=document.createElement('img');
     paperimg.setAttribute('src',data['paper']);
     paperimg.setAttribute('id','paper');
     scissorimg=document.createElement('img');
     scissorimg.setAttribute('src',data['scissor']);
     scissorimg.setAttribute('id','scissor');
     document.getElementById('flexbox').appendChild(rockimg);
     document.getElementById('flexbox').appendChild(paperimg);
     document.getElementById('flexbox').appendChild(scissorimg);

     





    

     
    
 }

 function win(){
    sum++;
    if (sum==3){
        var h1=document.createElement("h1");
        var text=document.createTextNode("YOU WON A CHICKEN MACDO");
        h1.appendChild(text);
        document.getElementById("Result").appendChild(h1);

    }



    
}

  button2.onclick=function exit(){


    document.getElementById("ratebutton").disabled=false;
    document.getElementById("rate").innerHTML="";


}




function rate(){


    document.getElementById("ratebutton").disabled=true;
    
    for(let i=0;i<=10;i++){
        var button1=document.createElement("button");
    var text1=document.createTextNode(i);
    button1.appendChild(text1);
    document.getElementById("rate").appendChild(button1);
    }
    
    document.getElementById("rate").appendChild(button2);





}
function helper(human,bot){
    var result;
    if (human.id=="rock"){
        if(bot.id=="rock"){
            result=0;

        }
        else{
            if(bot.id=="paper"){
                result=-1;
            }
            else{
                if(bot.id=="scissor"){
                    result=1;
                }
            }
        }
    }
    if (human.id=="paper"){
        if(bot.id=="rock"){
            result=1;

        }
        else{
            if(bot.id=="paper"){
                result=0;
            }
            else{
                if(bot.id=="scissor"){
                    result=-1;
                }
            }
        }
    }
    if (human.id=="scissor"){
        if(bot.id=="rock"){
            result=-1;

        }
        else{
            if(bot.id=="paper"){
                result=1;
            }
            else{
                if(bot.id=="scissor"){
                    result=0;
                }
            }
        }
    }
    if(result==1){
        var m1=document.createElement("h2");
        m1.setAttribute("id","win");
        var text1=document.createTextNode("YOU WIN!!!");
        m1.appendChild(text1);

    }
    else{
        if(result==0){
            var m1=document.createElement("h2");
            m1.setAttribute("id","draw");
            var text1=document.createTextNode("Draw");
            m1.appendChild(text1);

    
        }
        else{
            if(result==-1){
                var m1=document.createElement("h2");
                m1.setAttribute("id","lose");
                var text1=document.createTextNode("YOU LOST D:");
                m1.appendChild(text1);

        
            }
        }
        
    }
    m1.style.fontSize=100;
    return m1;
    
    
}

function creat(node){
    
    var temp=document.createElement("img")
    temp.setAttribute("id","temp");
    temp.setAttribute("width","150");
    temp.setAttribute("height","150");

        temp.src=node.src;

        return temp;
        


  
    

}


function rps(yourchoice){
    var bot;
    var flexbox_rps=document.createElement("div");
    flexbox_rps.setAttribute("id","flexbox2");

    let all_choices=[document.getElementById("rock"),document.getElementById("paper"),document.getElementById("scissor")];
    let i= Math.floor(Math.random() *3);
    bot=all_choices[i];
   
    document.getElementById("flexbox").remove();
    document.getElementById("boss").appendChild(flexbox_rps);
    document.getElementById("flexbox2").appendChild(creat(yourchoice));
    document.getElementById("flexbox2").appendChild(helper(yourchoice,bot));
    document.getElementById("flexbox2").appendChild(creat(bot));



    

    



}

function rps2(Choice){
    /* 1-function to get the random bot (done)
       2- function to get the win or lose  using data base method (done)
       3- function of creating a message  using dictionary method we use it as the massege got certain specifications(done)
       4- the front end function that creat new divs (as each image  should has its own color ) and the way
       to style it is by using the innerhtml method (done)
       
      
      var humanchoice,botchoice;
      humanchoice=Choice.id;
      botchoice=randomit(numberit()); //get the id of bot
      console.log(botchoice);
      var result=winorlose(humanchoice,botchoice);
      console.log(result);
      var finalmssg=getmssg(result);
      finish(humanchoice,botchoice,finalmssg);

      
}

function numberit(){
    return Math.floor(Math.random()*3);

}
function randomit(number){
    return ['rock','paper','scissor'][number];
}

function winorlose(humanid,botid){
    var database ={
        'rock':{'rock':0.5, 'scissor':1,'paper':0},
        'paper':{'paper':0.5, 'rock':1,'scissor':0},
        'scissor':{'scissor':0.5, 'paper':1,'rock':0}



    };
    return database[humanid][botid];
}
function getmssg(result){
    if (result===1){
        return {'text':'You won!!','color':'blue'};
    }
    else if(result==0){
        return{'text':'You lost D:','color':'red'};

    }
    else{
        return {'text':'Draw','color':'yellow'};
    }
}
function finish(humanid,botid,mssg){
var database={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor':document.getElementById('scissor').src

};

    document.getElementById('flexbox').innerHTML="";
    /*document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();*/

    /*

    humandiv=document.createElement('div');
    mssgdiv=document.createElement('div');
    botdiv=document.createElement('div');
    var img=document.createElement('img');
    img.setAttribute('src',database[humanid]);
    img.style.boxShadow="0px 10px 50px blue";
    img.setAttribute('height','150');
    img.setAttribute('width','150');

    humandiv.appendChild(img);
    
   // humandiv.innerHTML= "<img src='" +database[humanid] +"' width=150 height=150 style='box-shadow: 0px 10px 50px blue;' > "
    mssgdiv.innerHTML="<h2 style='color: "+mssg['color']+"; font-size: 60px;padding: 30px;'> "+mssg['text']+"  </h2>"
    botdiv.innerHTML= "<img src='" +database[botid] +"' width=150 height=150 style='box-shadow: 0px 10px 50px red;' > "
    mssgdiv.appendChild(button_tryagain);

    document.getElementById('flexbox').appendChild(humandiv);
    document.getElementById('flexbox').appendChild(mssgdiv);
    document.getElementById('flexbox').appendChild(botdiv);






}
*/



/*let arraysrc=["D:\\THE START\\static\\images\\2.png",
"D:\\THE START\\static\\images\\3.png",
"D:\\THE START\\static\\images\\4.png",
"D:\\THE START\\static\\images\\5.png",
"D:\\THE START\\static\\images\\6.png",
"D:\\THE START\\static\\images\\7.png",
"D:\\THE START\\static\\images\\8.png",
"D:\\THE START\\static\\images\\9.png",
"D:\\THE START\\static\\images\\10.png",
"D:\\THE START\\static\\images\\A.png",
"D:\\THE START\\static\\images\\J.png",
"D:\\THE START\\static\\images\\K.png",
"D:\\THE START\\static\\images\\Q.png",
];
*/



let blackjackinfo ={
    'you':{'id':'#Human','scoreid':'#yourscore','sum':0},
    'bot':{'id':'#Bot','scoreid':'#botscore','sum':0},
    'cardname':['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardsvalue':[2,3,4,5,6,7,8,9,10,[1,11],12,13,14],
    'statsid':'#stats',
    'td':{'idwin':'#wins','idlose':'#losses','iddraw':'#draws','winscore':0,'losescore':0,'drawscore':0},

    

};
let winsound=new Audio("static/sounds/cash.mp3");
let losesound=new Audio("static/sounds/aww.mp3");
let cardsound=new Audio("static/sounds/swish.m4a");




document.querySelector("#hit").addEventListener('click',Hit);
document.querySelector("#Deal").addEventListener('click',Deal);
document.querySelector("#stand").addEventListener('click',Stand);


let yourinfo=blackjackinfo['you'];
let botinfo=blackjackinfo['bot'];




function Deal(){

    document.querySelector('#hit').disabled=false;
    document.querySelector('#stand').disabled=false;


    let removeith=document.querySelector('#Human').querySelectorAll('img');
    let removeitb=document.querySelector('#bot').querySelectorAll('img');

    for(let i=0;i<removeith.length;i++){
        removeith[i].remove();

    }
    for(let i=0;i<removeitb.length;i++){
        removeitb[i].remove();

    }
    

    yourinfo['sum']=0;
    showscore('you');
    botinfo['sum']=0;
    showscore('bot');
    document.querySelector(yourinfo['scoreid']).style.color="black";
    document.querySelector(botinfo['scoreid']).style.color="black";
    document.querySelector(blackjackinfo['statsid']).textContent="Lets play!"; 
    document.querySelector(blackjackinfo['statsid']).style.color="black"; 

    document.querySelector('#deal').disabled=true;



    




}

function CheckWinner(){
    if(((yourinfo['sum']>botinfo['sum']) && yourinfo['sum']<=21)||(botinfo['sum']>21 && yourinfo['sum']<=21)){
        blackjackinfo['td']['winscore']+=1;
        winsound.play();
        document.querySelector(blackjackinfo['statsid']).textContent="YOU WON!"; 
        document.querySelector(blackjackinfo['statsid']).style.color="blue"; 

        document.querySelector(blackjackinfo['td']['idwin']).textContent=(blackjackinfo['td']['winscore']);

    }
    else if(((yourinfo['sum']<botinfo['sum']) && botinfo['sum']<=21)||(botinfo['sum']<=21 && yourinfo['sum']>21)){
        blackjackinfo['td']['losescore']+=1;
        losesound.play();
        document.querySelector(blackjackinfo['statsid']).textContent="YOU LOST!"; 
        document.querySelector(blackjackinfo['statsid']).style.color="red"; 
        document.querySelector(blackjackinfo['td']['idlose']).textContent=(blackjackinfo['td']['losescore']);

    }
    else{
        document.querySelector(blackjackinfo['statsid']).textContent="Draw"; 
        document.querySelector(blackjackinfo['statsid']).style.color="yellow"; 
        blackjackinfo['td']['drawscore']+=1;
        document.querySelector(blackjackinfo['td']['iddraw']).textContent=(blackjackinfo['td']['drawscore']);
    }
}






function Hit(){


    appendimage('you');
    showscore('you');

}

function appendimage(Any){
    if (blackjackinfo[Any]['sum']<21){

    
    let i=Math.floor(Math.random()*13);
    let newimg=document.createElement('img');
   sum(i,Any);
    newimg.setAttribute('src','static/images/'+blackjackinfo['cardname'][i]+'.png');
    document.querySelector(blackjackinfo [Any]['id']).appendChild(newimg);
    cardsound.play();
    }
    
}


function sum(i,Any){
    if(blackjackinfo['cardname'][i]=='A'){
        if((blackjackinfo[Any]['sum']+blackjackinfo['cardsvalue'][i][1])<=21){
            blackjackinfo[Any]['sum']+=blackjackinfo['cardsvalue'][i][1];

        }
        else{
            blackjackinfo[Any]['sum']+=1;
        }
    }
    else{
        blackjackinfo[Any]['sum']+=blackjackinfo['cardsvalue'][i];

    }
    
   


}
function showscore(x){
    if (blackjackinfo[x]['sum']>21){
        document.querySelector(blackjackinfo[x]['scoreid']).textContent="BUST!";
        document.querySelector(blackjackinfo[x]['scoreid']).style.color="red";


    }
    else{

    document.querySelector(blackjackinfo[x]['scoreid']).textContent=blackjackinfo[x]['sum'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function Stand(){
    document.querySelector('#hit').disabled=true;

    while(botinfo['sum']<16){
    appendimage('bot');
    showscore('bot');
    await sleep(1000);
    }

     CheckWinner();
     document.querySelector('#deal').disabled=false;
     document.querySelector('#stand').disabled=true;


    
    
}




       
        
        




    
   



































