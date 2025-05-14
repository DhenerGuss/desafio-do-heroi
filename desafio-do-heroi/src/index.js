let heroi = ["Dhener", 9000];


let name = heroi[0];
let xp = heroi[1];

if (xp < 1000){
    xp = "Ferro";
} else if (xp <= 2000){
    xp = "Bronze";
} else if (xp <= 5000){
    xp = "Prata";
} else if (xp <= 7000){
    xp = "Ouro";
} else if (xp <= 8000){
    xp = "Platina";
} else if (xp <= 9000){
    xp = "Ascendente";
} else if (xp <= 10000){
    xp = "Imortal";
} else {
    xp = "Radiante";
}
            
for (let i = 0; i < heroi[1]; i++){
    console.log(`O Heroi de nome ${name} está no nível de ${xp}`)
}