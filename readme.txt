-------> Tutorial Dasar Typescript <--------

1. Utamakan NodeJs dan NPM versi yang terbaru (min v8<)
2. install typescript secara global ( npm i -g typescript )
3. melihat versi typescript ( tsc -v )
4. untuk setup folder menjadi typescript ( tsc --init )
5. buka tsconfig.json
    aktifkan :
        "noImplicitAny" : true
        "outDir" : "./bundle"  --> membuat folder untuk menyimpan hasil compiler typescript ke javascript
        "rootDir": "./src"     --> menentukan folder tempat dimana typescript akan di tulis (tidak wajib)
6. ketik tsc di terminal, maka akan muncul folder dengan nama bundle yang berisi hasil compiler typescript ke javascript
7. ada 2 cara untuk menjalankan kodenya, 
    - menjalankan langsung typescript-nya
    - menjalankan hasil javascript-nya     ----> tsc && node folder/file.js


8. Pengunaan Typescript dalam pembuatan variable
    dalam pembuatan variabel perlu dan wajib setiap variabel mempunyai tipe data contoh
        - let namaVariabel: string
            saat di lakukan assignable pada namaVariabel dengan tipe data string maka terjadi error
        
        - saat membuat sebuah variable tanpa tipe data saat dilakukan assignable dengan tipe data apapun makan variable secara default bertipe data any.
            tipe data any dapat menerima semua tipe data string, number, boolean dll. usahakan minimalisir penggunaan tipe data any

        - untuk menambahkan dua atau lebih tipe data pada variabel dapat menggunakan simbol ( | )

    ada 2 jenis array yang dapat dibuat array biasa dan tupple array
        - array biasa dituliskan dengan cara const namaVariable: string[] --> semua yang ada dalam array harus berisi string

        - tupple array dituliskan dengan cara const namaVariable: [string, number, boolean] ---> tipe data yang berada di dalam array [string, number, boolean]

    kita juga dapat membuat atau meng-custom tipe data
        - type namaVariable = {
            nama: string,
            isKampret: boolean,
            hutang: number
        }

        - menggunakan tipe data yang dibuat
            let namaVariable: namaTipeData (yang telah dibuat sebelumnya)
        
        - melakukan inisialisasi variable yang bertipe data objek yang telah di custom
            namaVariable = {
                nama: 'rial',       ---> tipe data string
                isKampret: true,    ---> boolean
                hutang: 2000        ---> number
            }

9. Penggunaan Typescript dalam pembuatan fungsi
    dalam pembuatan fungsi kita dapat mengatur tipe data yang di kembalikan oleh sebuah fungsi:
        function namaFungsi(): tipeData {                            ---> fungsi biasa
            return 'berdasarkan tipeData yang di tetapkan'
          }

        const namaFungsi = (): string => {                           ---> arrow function
            return 'ini fungsi yang mengembalikan nilai string'
        }

    kita juga dapat menentukan tipe data pada parameter yang berada dalam fungsi
        const add = (x: number, y: number): string => {              ---> parameter bertipe data number dan di parsing atau di ubah menjadi string saat di return
            return `${x} ditambah ${y} hasilnya : ${x + y}`
        }

        const result = add(20, 20)
        console.log(result)

10. Penggunaan interface
    digunakan untuk mendefinisikan sebuah kontrak yang harus di ikuti objek, dapat dibuat optional  ----> precisionBoost?: tipeData
    dapat di perluas menggunakan extends    
        interface IProcessor {
            brand: string;
            baseModel: string;
            modelName: string;
            coreTotal: Core;
            clockSpeed: number;
        }

        interface Intel extends IProcessor{      ---->Intel mengambil semua properti yang ada di dalam IProcessor 
            turboBoost: boolean;
        }


