//! TIPE DATA VARIABLE
let namaSaya: string = 'Rial';
let isDead: boolean = false;
let username: number = 321;
// Error saat mengganti nilai yang awalnya berupa number menjadi string
// username = 'qwerty' ---> type 'string' is not assignable to type 'number'

// initialisasi awal variabel kosong dengan 2 tipe data ( number atau string )
let myGirlfriend: number | string;

// masukkan nilai
myGirlfriend = 6
myGirlfriend = 'ada 6'

// initialisasi awal tipe data array biasa
let arrayBiasa: string[]
// masukkan nilai
arrayBiasa = ['the', 'room']

// initialisasi awal tupple array
let tuppleArray: [string, number, boolean]
tuppleArray = ['saya', 2, true]

// membuat atau mengcustom tipe data sendiri
type TemanType = {
    nama: string;
    isKampret: boolean;
    hutang: number
}

// menggunakan tipe data Teman yang di buat sebelumnya
let temanKita: TemanType;

// initialisasi variabel temanKita yang bertipe data objek yang telah di custom di awal
temanKita = {
    nama: 'rial',
    isKampret: true,
    hutang: 2000
}

console.log({namaSaya })
console.log({username})
console.log({isDead})
console.log({myGirlfriend})
console.log({arrayBiasa})
console.log({tuppleArray})
console.log({temanKita})


//! FUNCTION
function create(): string {
    return 'this is string'
}

// arrow function
const create2 = (): number => {                     
    return 10
}

const result = create()
const result2 = create2()

console.log(result)
console.log(result2)

//! FUNCTION DENGAN TIPE: VOID
const create3 = (): void => {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log('ini tipe data void tidak dapat mereturn sebuah nilai')
    console.log('hasil dari 1 + 2 = ' + z )
}
create3() // memanggil fungsi void

// Menggunakan parameter dengan fungsi void
const add = (x: number, y: number): string => {
    return `${x} ditambah ${y} hasilnya : ${x + y}`
}

const result_add = add(20, 20)
console.log(result_add)

//! CONTOH KASUS
type CoreCount = 2 | 4 | 8 | 12
type CoreName = 'DualCore' | "QuadCore" | "SuperCore"

type Core = CoreCount | CoreName

interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
}

interface Intel extends IProcessor{                 //--->Intel mengambil semua yang ada di dalam IProcessor 
    turboBoost: boolean;
}

interface AMD extends IProcessor{                   //--->AMD mengambil semua yang ada di dalam IProcessor 
    precisionBoost?: string;
}

function processorIntel(processor: Intel): void{
    console.log(`
    ---
    brand name : ${processor.brand}
    base model : ${processor.baseModel}
    model name : ${processor.modelName}
    clock speed: ${processor.clockSpeed} 
    turbo boost: ${processor.turboBoost}
    ---
    `)
}

function processorAMD(processor: AMD): void{
    console.log(`
    ---
    brand name : ${processor.brand}
    base model : ${processor.baseModel}
    model name : ${processor.modelName}
    clock speed: ${processor.clockSpeed} 
    precision boost: ${processor.precisionBoost ? processor.precisionBoost : 'Tidak ada'}
    ---
    `)
}

const coreI5: Intel = {
    brand: 'Intel',
    baseModel: 'Core I5',
    modelName: 'I5 826U',
    coreTotal: 4,
    clockSpeed: 4,
    turboBoost: false
}

const ryzen5: AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 5',
    modelName: 'r-550U',
    clockSpeed: 4,
    coreTotal: 'QuadCore',
    precisionBoost: "ada" 
}

const ryzen3: AMD = {
    brand: 'AMD',
    baseModel: 'Ryzen 3',
    modelName: 'r-3500U',
    clockSpeed: 4,
    coreTotal: 'QuadCore',
}

processorIntel(coreI5)
processorAMD(ryzen3)
processorAMD(ryzen5)


