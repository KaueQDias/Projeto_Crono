var sec = 00;
var min = 00;
var hrs = 00;
var click = 00;
var interval;

function two(digito) {
    if(digito < 10){
        return("0" + digito);
    }else{
        return(digito);
    }
}

function comeca() {
    click++;

    if (click == 1) {
        interval = setInterval(contagem, 1000);
    }
}

function pausar() {
    clearInterval(interval);
    click = 0;
}

function reseta() {
    clearInterval(interval);
    sec = 00;
    min = 00;
    hrs = 00;
    document.getElementById('contagem').innerText= two(hrs) + ":" + two(min) + ":" + two(sec);
    click = 0;
}

function contagem() {
    sec++;
    
    if (sec == 60) {
        min++;
        sec = 00;
    }

    if(min == 60){
        hrs++;
        min = 00;
    }

    document.getElementById('contagem').innerText= two(hrs) + ":" + two(min) + ":" + two(sec);
}