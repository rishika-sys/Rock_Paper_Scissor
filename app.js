 array=['rock','paper','scissors'];

// alert(val);
document.getElementById("rock").addEventListener("click", myFunc1);

function myFunc1()
{
    val=Math.floor(Math.random()*array.length)
    if(array[val]=='rock')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player 2 also chose rock ,Its a TIE!";
    }
    else if(array[val]=='scissors')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose scissors,Hurray!! You won!";
    }
    else if(array[val]=='paper')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose paper,Oops Player 2 won!";
    }

    
}


document.getElementById("paper").addEventListener("click", myFunc2);
  
function myFunc2()
{
    val=Math.floor(Math.random()*array.length)
    if(array[val]=='rock')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose Rock,Oops Player2 won!";
    }
    else if(array[val]=='scissors')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose scissors,Oops Player2 won!";
    }
    else if(array[val]=='paper')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player 2 also chose paper,Its a TIE!";
    }
}

document.getElementById("scissors").addEventListener("click", myFunc3);
function myFunc3()
{
    val=Math.floor(Math.random()*array.length)
    if(array[val]=='rock')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose Rock, Oops Player2 won!";
    }
    else if(array[val]=='paper')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player2 chose paper ,Hurray!! You won!";
    }
    else if(array[val]=='scissors')
    {
        document.getElementById("resDisplay").style.display="";
        document.getElementById("resDisplay").innerHTML="Player 2 also chose paper, Its a TIE!";
    }
}