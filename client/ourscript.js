console.log("I am logging");

var btn = document.getElementById('mybutt');
var websocket = document.getElementById('connect');



websocket.addEventListener('click', function(){

	const socket = new WebSocket("ws://localhost:8080/poker");

	socket.addEventListener("open", (event) => {
  		socket.send("Hello Server!");
	});

	socket.onmessage = (event) => {
  		console.log("Message from server ", event.data);
	};

});




btn.addEventListener('click',async function(){
   const response = await fetch("http://localhost:8080/poker", {
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
