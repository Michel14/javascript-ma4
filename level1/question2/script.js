fetch('https://jsonplaceholder.typicode.com/todos')
	.then(result => result.json())
	.then((res) => {
		createTODO(res);
	})
	.catch(err => console.log(err))
	
function createTODO(result){
	
	for(i=0; i< result.length;i++ ){
		var div = document.createElement('div');
		div.innerHTML += "<div><b>User ID: </b>" + result[i].userId + "</div>";
		div.innerHTML += "<div><b>ID: </b>" + result[i].id + "</div>";
		div.innerHTML += "<div><b>Title: </b>" + result[i].title + "</div>";
		div.innerHTML += "<div><b>Completed: </b>" + result[i].completed + "</div>";
		div.className = "card bg-light";
		document.getElementById("cardCol").appendChild(div);
	}	
}
