function randomNumbers(){
    var randomNums = [];
    for(var i = 0; i < 2; i++){
        var temp = Math.floor(Math.random()*100);

        if(randomNums.indexOf(temp)==-1){
            randomNums.push(temp);
            document.getElementById("circle" + i).innerHTML = randomNums[i];
        }
        else{
            i--;
        }
    }
}
