var loginShow = false;
var signupShow = false;


function loginPopUp()
{

    var login = document.getElementById('login-container');
    if(!loginShow)
    {   
        loginShow = true;
        login.style.display = "block";
        setTimeout(() => {
            login.style.opacity = "1";
        login.style.right = "11%";
        }, 10);        
    }
    else
    {
        loginShow = false;
        login.style.opacity = "0";
        login.style.right = "1%";        
        setTimeout(() => {
            login.style.display = "none";
        }, 500);
    }
}

function signupPopUp()
{

    var signup = document.getElementById('signup-container');
    var modal = document.getElementById('modal-signup');

    if(loginShow)
    loginPopUp();

    if(!signupShow)
    {   
        signupShow = true;
        signup.style.display = "block";
        modal.style.display = "block";
        setTimeout(() => {
            signup.style.opacity = "1";
            setTimeout(() => {
                modal.style.opacity = "1";
            }, 300);
        }, 100);        
    }
    else
    {
        signupShow = false;
        signup.style.opacity = "0";
        signup.style.right = "1%";
        modal.style.opacity = "0";
        setTimeout(() => {
            signup.style.display = "none";
            modal.style.display = "none";
        }, 500);
    }
}