
// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedEm = localStorage.getItem('regemail');  //Users Name from Registration
    var storedPw = localStorage.getItem('regpassword');     //Users Password from Registration

    // entered data from the login-form
    var userEmail = document.getElementById('userEmail').value;     //Users Username Entered into Login box
    var userPw = document.getElementById('userPw').value;         //Users Password Entered into Login box
    var ButtonType = document.getElementById('login_btn').value; //Type of login button i.e. quick login normal login
    var FormAction = document.getElementById('login-form');      //Link the button redirects to on login
    
    // check if stored data from register-form is equal to data from login form
    if(userEmail == storedEm && userPw == storedPw) {
        localStorage.setItem('ls', "yes");
        //Overwriting the local data with the local data from the registration for auto fill on form 
        var storedfullname = localStorage.getItem('regfullname');
        localStorage.setItem('fullname', storedfullname);
        var storedemail = localStorage.getItem('regemail');
        localStorage.setItem('email', storedemail);
        var storedphone = localStorage.getItem('regphonenumber');
        localStorage.setItem('phonenumber', storedphone);
        var storedcode = localStorage.getItem('regpostcode');
        localStorage.setItem('code', storedcode);
        var storedaddress1 = localStorage.getItem('regaddress1');
        localStorage.setItem('address1', storedaddress1);
        var storedaddress2 = localStorage.getItem('regaddress2');
        localStorage.setItem('address2', storedaddress2);
        var storedcity = localStorage.getItem('regcity');
        localStorage.setItem('city', storedcity);
        var storedcounty = localStorage.getItem('regprovince/state/county');
        localStorage.setItem('province/state/county', storedcounty)
        var storedpetname = localStorage.getItem('regpetname');
        localStorage.setItem('petname', storedpetname);
        var storedpetdate = localStorage.getItem('regpetdate');
        localStorage.setItem('petdate', storedpetdate);
        var storedpetbreed = localStorage.getItem('regpetbreed');
        localStorage.setItem('petbreed', storedpetbreed);
        var storedimage = localStorage.getItem('regpet-image');
        localStorage.setItem('pet-image', storedimage);
        if (ButtonType == "Quick_Login"){
            alert('You are now Logged in. Redirecting back to the Rebate form....');
            FormAction.action="personaldetails.html";

        }else if(ButtonType == "Login"){
            alert('You are now Logged in. Redirecting to User Overview....');
            FormAction.action="useroverview.html";

        }

    }else {
        alert('Incorrect Email address or password');

    }
}
function visibility() {
    var x = document.getElementById("userPw");
    
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

function sessioncheck() {

    var loginaccount = document.getElementById("loginaccount");
    var loginsession = localStorage.getItem('ls');
    if (loginsession == "yes"){
        loginaccount.innerHTML="Account";
        loginaccount.href="useroverview.html";
        document.getElementById("quicklogintext").style.display = "none";
    }
    else{
        loginaccount.innerHTML="Log in";
        loginaccount.href="loginpage.html";
        document.getElementById("quicklogintext").style.display = "block";
    }

    
}



function logout() {
    var LoginStatus = localStorage.getItem('ls'); // Getting Login status from local storage


    if(LoginStatus == "yes"){  // If login status is yes (logged in) then set login status to no (logged out) then inform user.
        
        localStorage.removeItem("fullname"); 
        localStorage.removeItem("email");
        localStorage.removeItem("phonenumber");
        localStorage.removeItem("code");
        localStorage.removeItem("address1");
        localStorage.removeItem("address2");
        localStorage.removeItem("city");
        localStorage.removeItem("province/state/county");
        localStorage.removeItem("petname");
        localStorage.removeItem("petdate");
        localStorage.removeItem("petbreed");
        localStorage.removeItem('pet-image');
        localStorage.removeItem('ls');
        
        alert('You are now logged out.');
        var FormAction = document.getElementById('logout-form'); 
        FormAction.action="loginpage.html"
    }
    else{
        alert('You are not logged in.'); 
        var FormAction = document.getElementById('logout-form'); 
        FormAction.action="loginpage.html"
    }
    
}


function updateaccount() { //Updates any changes from user overview  

    //Sets local storage for registered user for the input of the overview form 
    // then updates the local storage for the logged in / auto fill data from the new reg data
    var storedfullname = localStorage.getItem('regfullname');
    localStorage.setItem('fullname', storedfullname);
    var storedemail = localStorage.getItem('regemail');
    localStorage.setItem('email', storedemail);
    var storedphone = localStorage.getItem('regphonenumber');
    localStorage.setItem('phonenumber', storedphone);
    var storedcode = localStorage.getItem('regpostcode');
    localStorage.setItem('code', storedcode);
    var storedaddress1 = localStorage.getItem('regaddress1');
    localStorage.setItem('address1', storedaddress1);
    var storedaddress2 = localStorage.getItem('regaddress2');
    localStorage.setItem('address2', storedaddress2);
    var storedcity = localStorage.getItem('regcity');
    localStorage.setItem('city', storedcity);
    var storedcounty = localStorage.getItem('regprovince/state/county');
    localStorage.setItem('province/state/county', storedcounty)
    var storedpetname = localStorage.getItem('regpetname');
    localStorage.setItem('petname', storedpetname);
    var storedpetdate = localStorage.getItem('regpetdate');
    localStorage.setItem('petdate', storedpetdate);
    var storedpetbreed = localStorage.getItem('regpetbreed');
    localStorage.setItem('petbreed', storedpetbreed);
    var storedimage = localStorage.getItem('regpet-image');
    localStorage.setItem('pet-image', storedimage);

    localStorage.removeItem('ls');

    alert("Your Information has been updated, Please relog to continue.");
    var FormAction = document.getElementById('update-form'); 
    FormAction.action="loginpage.html"

    
}

function deleteaccount() { //Clears local storage / "deletes" account 
    localStorage.clear();
    alert("You have logged out and your account has been deleted!");
    var FormAction = document.getElementById('delete-form'); 
    FormAction.action="loginpage.html"
}