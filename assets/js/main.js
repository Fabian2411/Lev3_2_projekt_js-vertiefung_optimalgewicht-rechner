// Lev3_2_projekt_js-vertiefung_optimalgewicht-rechner

// Heute werden wir einen Rechner für das Idealgewicht nach der folgenden Formel programmieren:

// • Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9

// • Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1

// ****************************************

// let size = document.getElementById("size").value;
// console.log(Number(size));

// let size = document.getElementById("size");
// console.log(Number(size.value));

// ohne die onclick funktion bekomme ich keinen Wert in der Konsole angezeigt???


function calculate(){
    let size = Number(document.getElementById("size").value);
    console.log(size);
    
    let age = Number(document.getElementById("age").value);
    console.log(age);

    let big = document.getElementById("breit").checked;
    console.log(big);

    let skinny = document.getElementById("schmal").checked;
    console.log(skinny);

    let ergebnisSchmal = ((size - 100) + (age/10)) * 0.9 * 0.9;
    let ergebnisBreit = ((size - 100) + (age/10)) *0.9 * 1.1;

    if (skinny == true){
        document.getElementById("result").innerHTML =`Dein Idealgewicht ist ${ergebnisSchmal}kg.`;
    }   else if (big == true){
        document.getElementById("result").innerHTML =`Dein Idealgewicht ist ${ergebnisBreit}kg.`;
    }
    }


// Formel für Menschen mit einem zierlichen und schmalen Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 0,9


// Formel für Menschen mit einem eher breiten Körperbau:
// [(Körpergröße in cm - 100) + (Alter/ 10)] x 0,9 x 1,1
