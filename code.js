const inputButton = document.getElementById("inputfilebutton");
inputButton.addEventListener("click", clickButton);

const inputnum = document.getElementById("inputnumbutton");
inputnum.addEventListener("click", clickButtonNum);

function clickButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(error){
        console.log(error);
        document.getElementById('output').textContent="Arquivo não localizado";
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickButtonNum(){

    document.getElementById("outputnum").innerHTML = ""
    num = document.getElementById("inputnum").value 

    try{
        if(num == '') throw "Insira um valor";
        if(num <= 5 || num >= 10) throw "Insira um valor maior que 5 e menor que 10";
    }
    
    catch(error){
        document.getElementById("outputnum").innerHTML = error
    }

    finally{
       alert("O número inserido foi: " + num);
    }
}
