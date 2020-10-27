var gamefield = [];

for (let i = 0; i < 9; i++){
    gamefield.push(document.getElementById('field' + (i+1)))
}

var click_count = 0;
var input_user1 = 'x'
var input_user2 = 'o'

function place_input(index) {
    if (click_count++ % 2 === 0) {
        gamefield[index - 1].innerText = input_user1
    } else {
        gamefield[index-1].innerText = input_user2
    }

    if (check_if_user_wins()) {
        document.getElementById('win').innerText = (click_count - 1) % 2 === 0 ? 'Spieler 1 hat gewonnen' : 'Spieler 2 hat gewonnen';
    }
}

function check_if_user_wins() {
    let counter = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (gamefield[i + j].innerText === input_user1) {
                counter++;
            }

            if (gamefield[i + (j * 3)].innerText === input_user1) {
                counter3++;
            }

            if (gamefield[i + j].innerText === input_user2) {
                counter2++;
            }

            if (gamefield[i + (j * 3)].innerText === input_user2) {
                counter4++;
            }
        }
        
        if (counter === 3 || counter2 == 3 || counter3 == 3 || counter4 == 3) {
            return true;
        }
        counter = 0
        counter2 = 0
        counter3 = 0
        counter4 = 0
    }

    if (gamefield[0].innerText === input_user1 && gamefield[4].innerText === input_user1 && gamefield[8].innerText === input_user1) {
        return true;
    }

    if (gamefield[2].innerText === input_user1 && gamefield[4].innerText === input_user1 && gamefield[6].innerText === input_user1) {
        return true;
    }

    if (gamefield[0].innerText === input_user2 && gamefield[4].innerText === input_user2 && gamefield[8].innerText === input_user2) {
        return true;
    }

    if (gamefield[2].innerText === input_user2 && gamefield[4].innerText === input_user2 && gamefield[6].innerText === input_user2) {
        return true;
    }

    return false;
}

