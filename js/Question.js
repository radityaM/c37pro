class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Your Name");
    this.input2 = createInput("# of Answer");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.question1 = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.reset=createButton('Reset');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0+10+10);

    this.question.html("Question: What is something that can always change " );
    this.question1.html("constantly in a code, and also can store values?  " );
    this.question.position(150, 50+10+10);
    this.question1.position(150, 70+10+10);
    this.option1.html("1: Function " );
    this.option1.position(150, 100+10+10);
    this.option2.html("2: Variable" );
    this.option2.position(150, 120+10+10);
    this.option3.html("3: Class " );
    this.option3.position(150, 140+10+10);
    this.option4.html("4: Database" );
    this.option4.position(150, 160+10+10);

    this.input1.position(150, 230+10+10);
    this.input2.position(350, 230+10+10);
    this.button.position(290, 300+10+10);
    this.reset.position(30,30+10);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
