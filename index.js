function checkguess(){
    var guess= document.getElementById("guess").value;

    var randomNumber = Math.floor(Math.random() * 10) + 1;

    if (guess == randomNumber){
        document.getElementById("result").innerHTML -"tebakan anda benar!"

    } else{
        document.getElementById("result").innerHTML= "tebakan lu salah poke, yang benar itu" + "    "+ randomNumber + ".  " + "tutor dekk";
    }

}

