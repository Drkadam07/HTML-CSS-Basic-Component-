let conm = '';
let result = '';

let resetbtn = document.querySelector('.resetbtn');
let msg_container = document.querySelector('.msg-container');
let you_compchoice = document.querySelector('#you_compchoice');
let winmsg = document.querySelector('#win-msg'); // Fixed typo
let win_loss_tiecount = document.querySelector('#win-loss-tiecount');
let com_img=document.querySelector('.com_img');
let user_img=document.querySelector('.user_img');
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    ties: 0
};
win_loss_tiecount.innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;

function playgame(playgame1) {
    computermove();

    if (playgame1 === 'scissor') {
        if (conm === 'scissor') {
            result = 'TIE 😊';
        } else if (conm === 'rock') {
            result = 'you lose 😒😒';
        } else if (conm === 'paper') {
            result = 'you win 😀🎉🎊😁';
        }
    } else if (playgame1 === 'paper') {
        if (conm === 'paper') {
            result = 'TIE 😊';
        } else if (conm === 'scissor') {
            result = 'you lose 😒😒';
        } else if (conm === 'rock') {
            result = 'you win 😀🎉🎊😁';
        }
    } else if (playgame1 === 'rock') {
        if (conm === 'rock') {
            result = 'TIE 😊';
        } else if (conm === 'paper') {
            result = 'you lose 😒😒';
        } else if (conm === 'scissor') {
            result = 'you win 😀🎉🎊😁';
        }
    }

    if (result === 'you win 😀🎉🎊😁') {
        score.win += 1;
    } else if (result === 'TIE 😊') {
        score.ties += 1;
    } else if (result === 'you lose 😒😒') {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    if (result === 'you win 😀🎉🎊😁') {
        winmsg.innerText = 'You Win';
        winmsg.style.color = 'green';
    } else if (result === 'you lose 😒😒') {
        winmsg.innerText = 'Computer Wins';
        winmsg.style.color = 'red';
    } else {
        winmsg.innerText = 'Tie 😊';
        winmsg.style.color = 'blue';
    }
    // win_loss_tiecount.innerHTML = `Wins: 0, Losses: 0, Ties: 0`;

    // you_compchoice.innerText = `You picked ${playgame1}, and the computer picked ${conm}`;
    you_compchoice.innerHTML = `You picked <img src="./lc06_${playgame1}-emoji.png" class="move_icon">
                    and the computer picked<img src="./lc06_${conm}-emoji.png" class="move_icon">`;

    // win_loss_tiecount.innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
    win_loss_tiecount.innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
    console.log(`You picked ${playgame1}, and the computer picked ${conm}: ${result}
    Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function computermove() {
    const randomnumber1 = Math.random();
    if (randomnumber1 >= 0 && randomnumber1 < 1 / 3) {
        conm = 'rock';
    } else if (randomnumber1 >= 1 / 3 && randomnumber1 < 2 / 3) {
        conm = 'paper';
    } else if (randomnumber1 >= 2 / 3 && randomnumber1 < 1) {
        conm = 'scissor';
    }
    console.log(conm);
}
resetbtn.addEventListener('click', () => {
    score.win = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('#win-loss-tiecount').innerHTML = `Wins: 0, Losses: 0, Ties: 0`;
    winmsg.innerText = '';
    you_compchoice.innerText = '';
});
