function compute()
{
    //variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //check positive amount number has been entered
    if(principal<=0){
        alert("Enter a positive number")
        principal.focus();
        return false;
    }
    document.getElementById("result").innerHTML="If you deposit "+"<span class=\"highlights\">"+principal+"</span>"+",\<br\>at an interest rate of "+"<span class=\"highlights\">"+rate+"</span>"+"%\<br\>You will receive an amount of "+"<span class=\"highlights\">"+interest+"</span>"+",\<br\>in the year "+"<span class=\"highlights\">"+year+"</span>"+"\<br\>"
   
}   
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        