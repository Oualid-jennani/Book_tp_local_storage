
var code = document.getElementById("code");
var isbn = document.getElementById("isbn");
var auteur = document.getElementById("auteur");
var title = document.getElementById("title");

var btnadd = document.getElementById("btnadd");
var btnedit = document.getElementById("btnedit");
var vide = document.getElementById("vide");


var tab = document.getElementById("tab");
var bodyTab = document.getElementById("bodyTab");

var currentRaw = -1;



//---------------load information local  Storage -------------
function load()
{
	bodyTab.innerHTML = localStorage.getItem("TableLivre");
}

load();

//---------------ajouter-------------
btnadd.onclick = function()
{

	if(code.value != "" && isbn.value != "" && auteur.value != "" && title.value != "")
	{
		var row = bodyTab.insertRow(0);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);

		cell1.innerHTML = code.value;
		cell2.innerHTML = isbn.value;
		cell3.innerHTML = auteur.value;
		cell4.innerHTML = title.value;

        cell5.innerHTML = "<button onclick='deleteRow(this)'>Delete</button> <button onclick='editRow(this)'>modifier</button>";
        
        
        /*
        bodyTab.innerHTML += "<tr><td>"+code.value+"</td><td>"+isbn.value+"</td><td>"+auteur.value+"</td><td>"+title.value+"</td><td><button onclick='deleteRow(this)'>Delete</button> <button onclick='editRow(this)'>modifier</button></td></tr>";
        
		*/
		//---------------ajouter local Storage -------------
		localStorage.setItem("TableLivre", bodyTab.innerHTML);
		
		clear();
	}
	else{alert("Complétez les informations ...")}

}



//---------------vide input-------------
vide.onclick = function(){clear();}

function clear()
{
	code.value = "";isbn.value = "";auteur.value = "";title.value = "";
	btnedit.style.display = "none";
	currentRaw = -1;
}



//---------------delete-------------
function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("tab").deleteRow(i);
	
	localStorage.setItem("TableLivre", bodyTab.innerHTML);
	clear();
}





//---------------edit-------------
function editRow(r) {
	
	var i = r.parentNode.parentNode.rowIndex;
	
	code.value = tab.rows[i].cells[0].innerHTML;
	isbn.value = tab.rows[i].cells[1].innerHTML;
	auteur.value = tab.rows[i].cells[2].innerHTML;
	title.value = tab.rows[i].cells[3].innerHTML;
	
	btnedit.style.display = "inline-block";
	currentRaw = i;
}

btnedit.onclick = function()
{
	
	if(code.value != "" && isbn.value != "" && auteur.value != "" && title.value != "")
	{
		tab.rows[currentRaw].cells[0].innerHTML = code.value;
		tab.rows[currentRaw].cells[1].innerHTML = isbn.value;
		tab.rows[currentRaw].cells[2].innerHTML = auteur.value;
		tab.rows[currentRaw].cells[3].innerHTML = title.value;

		clear();
	}
	else{alert("Complétez les informations ...")}
	
	localStorage.setItem("TableLivre", bodyTab.innerHTML);
	
}







//---------------search-------------

var txtsearsh = document.getElementById("txtsearsh");
			
txtsearsh.onkeyup = function()
{
	var filter = this.value.toLowerCase();
	var tr = bodyTab.getElementsByTagName("tr");
	
	for (var i = 0; i < tr.length; i++) {

		txtValue = tr[i].textContent ;

		if (txtValue.toLowerCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		} else {
			tr[i].style.display = "none";
		}
	}

}


