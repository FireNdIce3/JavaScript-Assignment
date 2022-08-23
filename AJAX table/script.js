var btn = document.getElementById("btn");
var counter = 0;
btn.addEventListener("click",function(){
    counter++;
    var request = new XMLHttpRequest();
    var dataArr = [];
    request.open('GET','https://reqres.in/api/users');
    request.onload = function(){
        var dataJ = JSON.parse(request.responseText);
        dataArr = dataJ.data;
        buildtable(dataArr);
    }
    function buildtable(dataArr){
        
       if(counter == 1){ var table = document.getElementById("ajaxTable");
        for (var i = 0; i < dataArr.length; i++){
			var row = `<tr>
							<td>${dataArr[i].first_name}</td>
							<td>${dataArr[i].last_name}</td>
							<td>${dataArr[i].email}</td>
                            <td><img src = "${dataArr[i].avatar}"></td>
					  </tr>`
			table.innerHTML += row
    }
}
    else{alert("Data has already been loaded");}
}
    request.send();
})
