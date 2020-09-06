function PasswordFun()
{
    var a= document.getElementById("password-entry");
    var b= document.getElementById("eye-visible");
    var c= document.getElementById("eye2");

        if(a.type === "password"){
          a.type = "text";

          // Changing CSS Properties

          b.style.display="none";
          c.style.display="block";
          c.style.display="unset"
        }

        else{
          a.type = "password";

          // Changing CSS Properties

          b.style.display="block";
          c.style.display="none";
          b.style.display="unset"
        }
}
