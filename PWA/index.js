if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration);
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    });
}

function calcular()
{
    var estudiantes = document.getElementById("numero_total").value - 1;
    var quienPasa = Math.round(Math.random() * (estudiantes)+1);

    document.getElementById("pasaEste").innerHTML = quienPasa;
    document.getElementById("pasaronEstos").innerHTML = document.getElementById("pasaronEstos").innerHTML + " " + quienPasa.toString();


    console.log(estudiantes);
    console.log(quienPasa);
}

function borrar(){
    document.getElementById("pasaronEstos").innerHTML = "";
    document.getElementById("pasaEste").innerHTML = "";
    document.getElementById("numero_total").value = null;

}