
/* question */
const quest1 = document.querySelector('.q1');
const quest2 = document.querySelector('.q2');
const quest3 = document.querySelector('.q3');
const quest4 = document.querySelector('.q4');
const quest5 = document.querySelector('.q5');
/* réponse */
const rep1 = document.querySelector('.hi1');
const rep2 = document.querySelector('.hi2');
const rep3 = document.querySelector('.hi3');
const rep4 = document.querySelector('.hi4');
const rep5 = document.querySelector('.hi5');
/* fleche haut */
const up1 = document.querySelector('.u1');
const up2 = document.querySelector('.u2');
const up3 = document.querySelector('.u3');
const up4 = document.querySelector('.u4');
const up5 = document.querySelector('.u5');
/* fleche bas */
const down1 = document.querySelector('.d1');
const down2 = document.querySelector('.d2');
const down3 = document.querySelector('.d3');
const down4 = document.querySelector('.d4');
const down5 = document.querySelector('.d5');

let nbr1 = 0;
quest1.addEventListener('click', ()=>{
    switch (nbr1) {
        case 0:
            rep1.style.display = "block";
            up1.style.display = "block";
            down1.style.display = "none";
            nbr1++;
            break;
    
        case 1:
            rep1.style.display = "none";
            up1.style.display = "none";
            down1.style.display = "block";
            nbr1 = 0;
            break;
    }
    
})
let nbr2 = 0;
quest2.addEventListener('click', ()=>{
    switch (nbr2) {
        case 0:
            rep2.style.display = "block";
            up2.style.display = "block";
            down2.style.display = "none";
            nbr2++;
            break;
    
        case 1:
            rep2.style.display = "none";
            up2.style.display = "none";
            down2.style.display = "block";
            nbr2 = 0;
            break;
    }
})
let nbr3 = 0;
quest3.addEventListener('click', ()=>{
    switch (nbr3) {
        case 0:
            rep3.style.display = "block";
            up3.style.display = "block";
            down3.style.display = "none";
            nbr3++;
            break;
    
        case 1:
            rep3.style.display = "none";
            up3.style.display = "none";
            down3.style.display = "block";
            nbr3 = 0;
            break;
    }
})
let nbr4 = 0;
quest4.addEventListener('click', ()=>{
    switch (nbr4) {
        case 0:
            rep4.style.display = "block";
            up4.style.display = "block";
            down4.style.display = "none";
            nbr4++;
            break;
    
        case 1:
            rep4.style.display = "none";
            up4.style.display = "none";
            down4.style.display = "block";
            nbr4 = 0;
            break;
    }
})
let nbr5 = 0;
quest5.addEventListener('click', ()=>{
    switch (nbr5) {
        case 0:
            rep5.style.display = "block";
            up5.style.display = "block";
            down5.style.display = "none";
            nbr5++;
            break;
    
        case 1:
            rep5.style.display = "none";
            up5.style.display = "none";
            down5.style.display = "block";
            nbr5 = 0;
            break;
    }
})




