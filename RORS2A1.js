  function initialLoad() { 
 	document.getElementById("defaultDisplay").style.display = "block";  	
 	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "none";
} 
 
 function object() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "block"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "none";
 } 
  function defineclass() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "block";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "none";
 } 
  function inheritance() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "block";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "none";
 } 
  function polymorphism() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "block"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "none";
 } 
  function encapsulation() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "block";
  	document.getElementById("abstraction").style.display = "none";
 } 

  function abstraction() { 
 	document.getElementById("defaultDisplay").style.display = "block"; 
  	document.getElementById("object").style.display = "none"; 
  	document.getElementById("class").style.display = "none";  	
  	document.getElementById("inheritance").style.display = "none";  	
  	document.getElementById("polymorphism").style.display = "none"; 
  	document.getElementById("encapsulation").style.display = "none";
  	document.getElementById("abstraction").style.display = "block";
 } 
 
// function signup() {  	
// 	document.getElementById("defaultDisplay").style.display = "none";  	
// 	document.getElementById("login").style.display = "none";  	
// 	document.getElementById("signup").style.display = "block";  	
// 	document.getElementById("home").style.display = "none"; 
// } 
 
// function home() {  	
// 	document.getElementById("defaultDisplay").style.display = "none";  	
// 	document.getElementById("login").style.display = "none";  	
// 	document.getElementById("signup").style.display = "none";  	
// 	document.getElementById("home").style.display = "block";  	
// 	document.getElementById("loggedInUser").innerHTML = "Hello! " + localStorage.getItem('name') + "<br>"; 
//} 
 
 
/* functionality */ 
 
// function signupSubmit() {  	
// 	// var name = document.getElementById("signup-name").value;  	
// 	// var email = document.getElementById("signup-email").value;  	
// 	// var password = document.getElementById("signup-password").value;  	
// 	localStorage.setItem('name', document.getElementById("signup-name").value);  	
// 	localStorage.setItem('email', document.getElementById("signup-email").value);  	
// 	localStorage.setItem('password', document.getElementById("signup-password").value); 
//  	login(); 
// } 
 
// function loginSubmit() {  	
// 	var email = document.getElementById("login-email").value;  	
// 	var password = document.getElementById("login-password").value;  	
// 	if(localStorage.getItem('email') === email && localStorage.getItem('password') === password) 
//  	{ 
//  	 	home(); 
//  	}else { 
//  	 	document.getElementById("errorMsg").innerHTML = "user or password is incorrect." 
//  	} 
// } 
 
// function logout() { 
//  	localStorage.clear();  	initialLoad(); 
// } 
