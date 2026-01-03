var errormessage="";
var missingfeild="";
function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
    $("#submitbutton").click(function(){
        if($("#Email").val() ==""){
            missingfeild+="<p>Email not field</p>";
        }
        if($("#phoneno").val() ==""){
            missingfeild+="<p>Phone number not field</P>";
        }
        if($("#password").val() ==""){
            missingfeild+="<p>password not field</p>";
        }

        if(isEmail($("#Email").val()) == false ){
            errormessage +="<p>Email is not valid</p>";
        }
        if($.isNumeric($("#phoneno").val()) == false ){
            errormessage+="<p>Phone number is not valid</p>";
        }
        if($("#password").val() != $("#confirmpassword").val() ){
            errormessage+="<p>password does not match</p>";
        }
        if(errormessage == ""){
            $("#success").html("Submitted Successfully")
        }else{
            $("#errors").html(errormessage + missingfeild);
        }
    });

    var myInput = document.getElementById("password");
    var length = document.getElementById("length");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");

    myInput.onfocus = function(){
        document.getElementById("validation").style.display = "block";
    }
    myInput.onblur = function(){
        document.getElementById("validation").style.display = "none";
    }

    myInput.onkeyup = function(){
        var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)){
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        }else{
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)){
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        }else{
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        var numbers = /[0-9]/g;
        if(myInput.value.match(numbers)){
            number.classList.remove("invalid");
            number.classList.add("valid");
        }else{
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        if(myInput.value.length >= 8){
            length.classList.remove("invalid");
            length.classList.add("valid");
        }else{
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }
    
    

