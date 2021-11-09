

function szovegMegjelenites() {
    
    let szoveg = document.getElementById("szoveg").value;
    if (szoveg.trim() === "") {
        document.getElementById("szovegHiba").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("szovegHiba").style.color = "red";
    }else if (szoveg.trim() != "") {
        document.getElementById("szovegHiba").innerHTML = "";
        document.getElementById("elonezet").innerHTML = szoveg;
        
    }
    
}
function szovegMeret() {
    let szovegMeret = document.getElementById("meret").value;
    document.getElementById("elonezet").style.fontSize = szovegMeret + 'pt';

}

function szovegSzin() {
    let szovegSzin = document.getElementById("szovegszin").value;
    document.getElementById("elonezet").style.color = szovegSzin;
}

function hatter() {
    let hatterszin = document.getElementById("hatter").value;
    document.getElementById("elonezet").style.background = hatterszin;
}

function alaphelyzet() {
    let elonezet = document.getElementById("elonezet")
    document.getElementById("szoveg").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("meret").innerHTML = "12";
    document.getElementById("szovegszin").innerHTML = "#000000";
    document.getElementById("hatter").innerHTML = "#FFFFFF";
    elonezet.innerHTML = "Árvíztűrő tükörfúrógép";
    elonezet.style.color = "";
    elonezet.style.background = "";
    elonezet.style.fontSize = "12pt";

}
function init(){
    document.getElementById('szoveg').addEventListener("input",szovegMegjelenites);
    document.getElementById('meret').addEventListener("input",szovegMeret);
    document.getElementById('szovegszin').addEventListener("input",szovegSzin);
    document.getElementById("hatter").addEventListener("input",hatter);
    document.getElementById("alap").addEventListener("click",alaphelyzet);
}

document.addEventListener("DOMContentLoaded", init);