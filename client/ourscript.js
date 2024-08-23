console.log("I am logging");

var btn = document.getElementById('mybutt');

btn.addEventListener('click',async function(){
   const response = await fetch("http://localhost:8080/foo", {
	method:"POST",
	headers:{
		"Content-Type": "application/json"		
	}
   });

	if (!response.ok) {
		console.error(response);
	}
	else 
	{
		console.log("yay");
	}
});
