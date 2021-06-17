class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    if(contestantCount===2){
      background("yellow");
    }
    //write code to show a heading for showing the result of Quiz
    if(contestantCount===2){
      fill("black");
      textSize(50);
      text("RESULTS",330,50);
      text("--------------",330,80);
    }

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined
    //write code to add a note here
    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted with green color!",130,230)
    
      //write code to highlight contest who answered correctly
      var y=230;

      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns===allContestants[plr].answer)
          fill("green")
        else
          fill("red");
        y=y+30;
        text(allContestants[plr].name + ": " + allContestants[plr].answer,130,y);
      }
    }

  }

}
