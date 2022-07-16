function onCheck()
{
    let check = +document.querySelector("#check").value;
    let check1 = +document.querySelector("#check1").value;
    let check2 = +document.querySelector("#check2").value;
    let check3 = +document.querySelector("#check3").value;
    let check4 = +document.querySelector("#check4").value;
    let result = +check+check1+check2+check3+check4;
    document.querySelector("#result").innerHTML = "Grand Total:="+result;
    let obtained = +document.querySelector("#obtained").value;
    let obtained1 = +document.querySelector("#obtained1").value;
    let obtained2 = +document.querySelector("#obtained2").value;
    let obtained3 = +document.querySelector("#obtained3").value;
    let obtained4 = +document.querySelector("#obtained4").value;
    let result1 = obtained+obtained1+obtained2+obtained3+obtained4;
    document.querySelector("#result1").innerHTML = "Obtained Marks:="+result1;
    let result2 = result1/result*100
    document.querySelector("#result2").innerHTML = "Percentage:="+result2+"%";
    if(result2>100)
    {
        document.querySelector("#result3").innerHTML = "Invalid";

    }
   else if(result2>=80 && result2<=100)
    {
        document.querySelector("#result3").innerHTML = "Congrats you got A+ Grade";

    }
   else if(result2>=70 && result2<=79.9)
    {
        document.querySelector("#result3").innerHTML = "Excellent for A Grade";

    }
   else if(result2>=60 && result2<=69.9)
    {
        document.querySelector("#result3").innerHTML = "Good B Grade";

    }
   else if(result2>=50 && result2<=59.9)
    {
        document.querySelector("#result3").innerHTML = "Better C grade";

    }
   else if(result2>=40 && result2<=49.9)
    {
        document.querySelector("#result3").innerHTML = "Need Improvement D Grade";

    }
   else if(result2>=33 && result2<=39.9)
    {
        document.querySelector("#result3").innerHTML = "Need Hard Work E Grade";

    }
   else if(result2<=32.9)
    {
        document.querySelector("#result3").innerHTML = "Better Luck Next time Fail!";

    }

}