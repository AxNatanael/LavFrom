
async function faiGet(Url) {
    const response = await fetch(Url,{mode:"no-cors"});
    console.log(response);
}

function ConfButton(){
    var name = document.getElementById("BNome").value; //si prende il valore basandoci sull' id che è univoco e con innerHtml si prende il valore
    var Cognome = document.getElementById("BCognome").value;
    var url = "https://webhook.site/88c7f5ad-874e-41e6-af6b-39e37398b010";
    console.log(name + " " + Cognome);
    
    var fullUrl=url + "?Nome=" + name + "&Cognome=" + Cognome;
    console.log(fullUrl);
    faiGet(fullUrl);
    document.getElementById("BNome").value = "";
    document.getElementById("BCognome").value = "";
}

function salvaLocal(){
    
    var nome = document.getElementById("CNome").value;
    var cognome = document.getElementById("CCognome").value;
    
    localStorage.setItem("Nome", nome);
    localStorage.setItem("Surname", cognome);
    
    console.log(nome + " " + cognome);

    document.getElementById("CNome").value = "";
    document.getElementById("CCognome").value = "";
}

function welcome(){
    
    var nomew = localStorage.getItem("Nome") || ""; 
    var cognomew = localStorage.getItem("Surname") || "" ; 
    if (nomew == "" && cognomew == "") {
        alert("Benvenuto");
    }
    else
    {
        alert(nomew + cognomew + " was here");
    }
    console.log(nomew + " " + cognomew);

}
