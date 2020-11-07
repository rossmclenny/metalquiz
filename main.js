function check () {
    var c = 0
    var w = 0
    var radios = document.getElementsByName('question1');
    var radios2 = document.getElementsByName('question2');
    var radios3 = document.getElementsByName('question3');
// question 1
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) 
        {
            if (radios[i].value == "Lars") {
                c++
            } else {
                w++
            } 
        } 
    } 
// question 2
    for (var i = 0; i < radios2.length; i++) {
    if (radios2[i].checked) 
    {
        if (radios2[i].value == "Tom") 
            {
            c++
            } else
            {
             w++    
            } 
        } 
    } 
// question 3
    for (var i = 0; i < radios3.length; i++) {
    if (radios3[i].checked) 
    {
        if (radios3[i].value == "David") 
            {
            c++
            } else
            {
            w++   
            } 
        }
    } 
    alert(`you got ${c} answers correct and ${w} answers wrong!`)
} //end of check function

