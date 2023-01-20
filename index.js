function dna(){
    return (Math.floor(Math.random() * 10)) % 2 == 0 ? 0 : 1;
}

function sx(P1, P2){
    let hw = '';
    try {
        P1 != P2 ? hw = 'Hello World!!' : hw = "It's not possible!";
        let h = P1[dna()];
        let m = P2[dna()];
        return `${m + h}: ${hw}`;
    } catch (error) {
        console.log('Impossible!!');
    }
}

const H = {dna: 'XY'};
const M = {dna: 'XX'};
const bb = sx(H.dna, M.dna);
const sem = 10;

switch (true) {
    case sem >= 11 && sem <= 14:
    case sem >= 18 && sem <= 22:
    case sem == 33 || sem == 34:
        console.log(bb);
        break;
    default:
        console.log('X?: Hello World!!');
}