const elTitle = document.querySelector('h1')
const elChangeTextBtn = document.querySelector('button')
elChangeTextBtn.addEventListener('click', function () {
    elTitle.textContent = 'JavaScript';
    elChangeTextBtn.textContent = 'Button'
})

let son1 = 15;
let son2 = 5;

console.log(son1 <= son2);

let ism = "Axmadillo";
let words = `Salom ${ism}!`
console.log(words);

let soz1 = true
let soz2 = false
console.log(!soz1);

const html = true;
const css = true;
let sms = '';

if (html && css) {
    sms = 'Bootstrapga otishga ruhsat'
} else if (html || css) {
    sms = 'Cssni tugatvo krisa'
} else {
    sms = 'html va css tugatvo birinchi!'
};

console.log(sms);

const functionPlus = function (son1, son2) {
    return son1 + son2
};

console.log(functionPlus(10, 25));

const kvadrat = function (son) {
    return son * son
};

console.log(kvadrat(5));

const mevalar = ['gilos', 'olma', 'orik'];
const boshmi = mevalar.length === 0;
const elText = document.querySelector('.elText2');
if (boshmi) {
    elText.textContent = 'Savatcha bosh'
} else {
    elText.textContent = `Savtcha ${mevalar.length}ta mahsulot`
}

const sonlar = prompt('Sonni toq yoki juft ekanligini bilish uchun ragam kiriting')
const elText3 = document.querySelector('.elText3')
if (sonlar % 2 === 0) {
    elText3.textContent = `${sonlar} - juft son`;
} else if (sonlar % 2 === 1) {
    elText3.textContent = `${sonlar} - toq son`;
}
else {
    elText3.textContent = `Bor ashag'da oyna`;
}