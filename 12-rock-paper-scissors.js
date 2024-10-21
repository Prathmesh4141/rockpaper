/*
        const score ={
            wins: 0,
            losses: 0,
            Tie: 0
        };
        */
       let isautoplay=false;
       let intervalid;
        function autoPlay(){
            if(!isautoplay){

                intervalid=setInterval(function(){
                    const playerMove=pickComputerChoice();
                    playerGame(playerMove);
                },1000);
                isautoplay=true;
            }
            else{
                clearInterval(intervalid);
                isautoplay=false;
            }

        }
        let score=JSON.parse(localStorage.getItem('score'))||{wins: 0, losses: 0,Tie: 0};

        if(!score){
            score={
                wins: 0,
                losses: 0,
                Tie: 0
            }
        };

        updateScoreElement();

        function playerGame(playerMove){
            

        const computerChoice=pickComputerChoice();
        let result='';
        if(playerMove==='rock'){
            if(computerChoice=='rock'){
                result='Tie';
            }
            else if(computerChoice=='paper'){
                result='you lose';
            }
            else{
                result='you win';
            }
            
        }
        else if(playerMove==='paper'){
            if(computerChoice=='rock'){
                result='you win';
            }
            else if(computerChoice=='paper'){
                result='Tie';
            }
            else{
                result='you lose';
            }
            
        }
        else if(playerMove==='scissors'){
            if(computerChoice=='rock'){
                result='you lose';
            }
            else if(computerChoice=='paper'){
                result='you win';
            }
            else if(computerChoice==='scissors'){
                result='Tie';
            }
        }
        if(result==='you win'){
            score.wins++;
        }
        else if(result==='you lose'){
            score.losses++;
        }
        else{
            score.Tie++;
        }

        localStorage.setItem('score' , JSON.stringify(score));
        updateScoreElement();

        updateScoreElement();

        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves')
        .innerHTML=  `You
        <img src="${playerMove}-emoji.png" alt="" class="icons">
        <img src="${computerChoice}-emoji.png" alt="" class="icons">
        Computer`;
    }

        function updateScoreElement(){
            document.querySelector('.js-score')
            .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.Tie}`;
        }

        function pickComputerChoice(){
            let computerChoice='';
            const randomNumber=Math.random();

        if(randomNumber>=0&& randomNumber<1/3){
            computerChoice='rock';
        }
        else if(randomNumber>=1/3&& randomNumber<2/3){
            computerChoice='paper';
        }
        else{
            computerChoice='scissors';
        }
        return computerChoice;
        }