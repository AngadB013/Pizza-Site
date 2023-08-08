//To check that none of the required input fields are blank. 
function validateform()
{ 
    //validation for input fields
    if( document.myform.firstname.value == "" )
    {
        alert( "Please provide your Name!" );
        document.myform.firstname.focus() ;
        return false;
    }
   
   //validation for input fields
    if( document.myform.lastname.value == "" )
    {
        alert( "Please provide your Last Name!" );
        document.myform.lastname.focus() ;
        return false;
    }
	
	//validation for radio buttons
	var option=document.getElementsByName('gender');
    if (!(option[0].checked || option[1].checked || option[2].checked)) 
	{
        alert("Please Select your gender");
        return false;
    }
	
	//validation for mobile number
    if( document.myform.phone.value == "" ||
        isNaN( document.myform.phone.value) ||
        document.myform.phone.value.length != 10 )
    {
        alert( "Please provide a correct Mobile No." );
        document.myform.phone.focus() ;
        return false;
    }
	
	//validation for input fields
    if(document.getElementById("address").value == "" )
	{
        alert("Please enter information in the Address");
        document.myform.address.focus();
        return false;
	}   
	
    //validation for email	
    var x = document.myform.email.value;  
    var atposition = x.indexOf("@");  
    var dotposition = x.lastIndexOf(".");  
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length)
	{
        alert("Please enter a valid e-mail address");  
        return false;  
    }  
    var x = document.myform.email.value;
    if (x === "")
    {
        alert("Please input a Value");
        return false;
    }
	
	//check that the postcode is 4-digit.
	if( document.myform.postcode.value == "" ||
        isNaN( document.myform.postcode.value) ||
        document.myform.postcode.value.length != 4 )
    {
        alert( "Please provide a correct 4 digit Pin Code" );
        document.myform.postcode.focus() ;
        return false;
    }
    
	//validation for password
	var pwd=document.getElementById("psw").value;
	var cnfpwd=document.getElementById("psw-repeat").value;
	
	if(pwd === "")
	{
		alert("Please enter a password");
		return false;
	}
	if(cnfpwd === "")
	{
		alert("Please enter the confirm password");
		return false;
	}
	//check that the password is at least 8-character long;
	if(pwd.length<8)
	{
		alert("password length is invalid (must be more than 8 charachters)");
		return false;
	}
	//to check if passwords match each other
	if(pwd != cnfpwd)
	{
		alert("password and confirm password not match");
		return false;
	}
	
return true;  
}

