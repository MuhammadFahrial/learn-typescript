"use strict";
//! TIPE DATA VARIABLE
let namaSaya = 'Rial';
let isDead = false;
let username = 321;
// Error saat mengganti nilai yang awalnya berupa number menjadi string
// username = 'qwerty' ---> type 'string' is not assignable to type 'number'
// initialisasi awal variabel kosong dengan 2 tipe data ( number atau string )
let myGirlfriend;
// masukkan nilai
myGirlfriend = 6;
myGirlfriend = 'ada 6';
// initialisasi awal tipe data array biasa
let arrayBiasa;
// masukkan nilai
arrayBiasa = ['the', 'room'];
// initialisasi awal tupple array
let tuppleArray;
tuppleArray = ['saya', 2, true];
// menggunakan tipe data Teman yang di buat sebelumnya
let temanKita;
// initialisasi variabel temanKita yang bertipe data objek yang telah di custom di awal
temanKita = {
    nama: 'rial',
    isKampret: true,
    hutang: 2000
};
console.log({ namaSaya });
console.log({ username });
console.log({ isDead });
console.log({ myGirlfriend });
console.log({ arrayBiasa });
console.log({ tuppleArray });
console.log({ temanKita });
//! FUNCTION
function create() {
    return 'this is string';
}
// arrow function
const create2 = () => {
    return 10;
};
const result = create();
const result2 = create2();
console.log(result);
console.log(result2);
//! FUNCTION DENGAN TIPE: VOID
const create3 = () => {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log('ini tipe data void tidak dapat mereturn sebuah nilai');
    console.log('hasil dari 1 + 2 = ' + z);
};
create3(); // memanggil fungsi void
// Menggunakan parameter dengan fungsi void
const add = (x, y) => {
    return `${x} ditambah ${y} hasilnya : ${x + y}`;
};
const result_add = add(20, 20);
console.log(result_add);
function processorIntel(processor) {
    console.log(`
    ---
    brand name : ${processor.brand}
    base model : ${processor.baseModel}
    model name : ${processor.modelName}
    clock speed: ${processor.clockSpeed} 
    turbo boost: ${processor.turboBoost}
    ---
    `);
}
function processorAMD(processor) {
    console.log(`
    ---
    brand name : ${processor.brand}
    base model : ${processor.baseModel}
    model name : ${processor.modelName}
    clock speed: ${processor.clockSpeed} 
    precision boost: ${processor.precisionBoost ? processor.precisionBoost : 'Tidak ada'}
    ---
    `);
}
const coreI5 = {
    brand: 'Intel',
    baseModel: 'Core I5',
    modelName: 'I5 826U',
    coreTotal: 4,
    clockSpeed: 4,
    turboBoost: false
};
const ryzen5 = {
    brand: 'AMD',
    baseModel: 'Ryzen 5',
    modelName: 'r-550U',
    clockSpeed: 4,
    coreTotal: 'QuadCore',
    precisionBoost: "ada"
};
const ryzen3 = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: 'r-3500U',
    clockSpeed: 4,
    coreTotal: 'QuadCore',
};
processorIntel(coreI5);
processorAMD(ryzen3);
processorAMD(ryzen5);
