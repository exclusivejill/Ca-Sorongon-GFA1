function required()
{
var blank = document.forms["firstname"]["lastname"]["email"]["sex"].value;
if (blank == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Succesful Sign-in');
return true; 
}}