//when viewer clicks on Delivery (with id chkyes) radio button, the delivery address (with id shippingName) field activates
function EnableDisableTextBox() {
	
    var chkYes = document.getElementById("chkYes");
    var txtdelivery = document.getElementById("shippingName");
    txtdelivery.disabled = chkYes.checked ? false : true;
    if (!txtdelivery.disabled) {
        txtdelivery.focus();
    }	
    else{	
	    document.getElementById('shippingName').value = "";		
	    document.getElementById('chkNo').value = "";	
	}	
}

//if a checkbox is checked it copies the address of delivery address field to billing address field
function billingFunction(){
	
    if (document.getElementById('same').checked){
    var txtdelivery =  document.getElementById('shippingName').value; 
    document.getElementById('billingName').value = txtdelivery;
	}
	else{ 
		document.getElementById('billingName').value = "";
	}	
}

//check that none of the required input fields are blank. 
function validateform(){
	
	//validation for radio button
	var opt=document.getElementsByName('mode');
    if (!(opt[0].checked || opt[1].checked)) 
	{
        alert("Please Select mode of your order");
        return false;
    }
	
	//validation for delivery address field
	if (document.getElementById('chkYes').checked){
	if( document.myform.shippingName.value == "" )
	    {
		alert("Please fill the delivery address")
		return false;
	    }
	}
	
    //validation for radio button
    var option=document.getElementsByName('Payment Mode');
    if (!(option[0].checked || option[1].checked)) 
	{
        alert("Please Select Your Payment mode");
        return false;
    }
	
	//validation for radio button
	if (document.getElementById('cr').checked){
	var opt=document.getElementsByName('card');
	if (!(opt[0].checked || opt[1].checked || opt[2].checked)) 
	    {
		alert("Please Select the credit card you would like to pay through");
        return false;
	    }
	}
	
	//validation for card
	if (document.getElementById('visa').checked){
	if( document.myform.card1.value == "" )
	    {
		alert("Please fill the visa card number")
		return false;
	    }
	}
	
	//validation for card
	if (document.getElementById('masters').checked){
	if(document.myform.card2.value == "")
	    {
		alert("Please fill the master card number")
		return false;
	    }
	}
	
	//validation for card
	if (document.getElementById('americancard').checked){
	if (document.myform.card3.value == "")
	    {
	 	alert("Please fill the master card number")
		return false;
	    }
	}
	
	//validation for card
	if( document.myform.billingName.value == "" )
    {
        alert( "Please provide your billing address!" );
        document.myform.billingName.focus() ;
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
	
	//validation for email
    var x = document.myform.email.value;  
    var atposition = x.indexOf("@");  
    var dotposition = x.lastIndexOf(".");  

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length)
	{
      alert("Please enter a valid e-mail address");  
	  document.myform.email.focus() ;
      return false;  
    }  
	
}

//if radio button is clicked the credit card field appears
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
    }
	
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
    }
	
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
    }	

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'none')
          e.style.display = 'block';
       else
          e.style.display = 'none';
    }	
