
// ------- awal ----------------- >

// function lemparDadu() {
    //     console.log(Math.floor(Math.random() * 6) + 1);
    //  }




 // ------- Mendifinisikan dan menjalakan Function ----------------- >
 
 
//  function Nyanyi() {
//      console.log('hallo world')
//     }
    
//     Nyanyi();
    
// ------- Argument dan parameter dalam function ----------------- >

// function greet(name) {
//     console.log(`hi ${name}`);
// }
// greet('fansya')


// ------- Multiple Parameter dan argument ----------------- >

// function Jumlahkan(a, b) {
//     const total = a + b ;
//     console.log(total);
// }

// Jumlahkan(1, 2);


// ------- Statment Return pada Function ----------------- >

// function Jumlahkan(a = 0, b = 0) {
    //     const total = a + b;
    //     // console.log(total)
    //     return total;  // <----- bisa menyimpan variabel
    // }
    
    // function Jumlahkan(a, b) {
        
        //     if (typeof a !== 'number' || typeof b !== 'number') {
            //         return 'Bukan angka';
//     }
//     return a + b;
// }


// ------- Visibilitas Variabel Sesuai Scope Atau  Ruang Lingkup  ----------------- >

// let  programming = 'Javascript';

// function typesafe() {
    //    let programming = 'Typescript'; 
    //    console.log(programming);
    
    // }
    
    // typesafe(); // <----- untuk memanggil function variabel 'Tyescript'
    
    // console.log(programming);
    



// ------- Blocked variabel ------------------------------------------------------------- >

// let tinggi = 8

// if(tinggi > 5) {
    //     var lebar = 10
    //     // console.log(lebar);
    // }
    
    // console.log('lebar', lebar);
    
    
// for(let index = 0; index < 10; index++) {
    //     var lebar = index;
    //     // console.log(indexNumber);
    // }
    // console.log('lebar', lebar);
        
        
        
 // ------- Blocked variabel ------------------------------------------------------------- >


// function lamarKerja() {
//     const jabatan = 'Progremmer'

//     function orang_dalam() {
//         let kenalan = `orang dalam bisa memasukan ${jabatan}` ;

//         console.log(kenalan);
//     }

//     orang_dalam();

// }


 // ------- Function Experssions ------------------------------------------------------------- >

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5);




// const hasilPerpangkatan = function (nilai, pembanding) {
//     return nilai * pembanding;
// };



// ------- Function Sebagai Argument function lain ------------------------------------------------------------- >

// function duakali(func) {
//     func()
//     func()
// }

// function lemparDadu() {
//     const nilai = Math.floor(Math.random() * 6) + 1
//     console.log(nilai)
// }

// duakali(lemparDadu)



// ------- Function Benilai balik function ------------------------------------------------------------- >

// function HasilnyadalahFunction() {
//     const rand = Math.random()

//     if(rand > 0.10) {
//         return function() {
//             console.log('Selamat, angkanya lebih besar');
//         };
//     } else {
//         return function () {
//             console.log('Maaf, mungkin bisa coba lagi');
//         };
//     }
// }

// // ------- Definsi sebuah method ------------------------------------------------------------------------ >

// function myfun() {  //function biasa
//     // console.log('hi');
//     return 'Fansya, Semangat belajar coding nya!!!';
// }

// const myMath = { //object
//     perkalian: function (x , y) { //method
//         return x *  y;
//     },
// };


// // ------- This adalah keyword sakti ------------------------------------------------------------------------ >


// const saya = {
//     nama: 'Fansya',
//     hobi: 'Coding',
//     kenalan: function() {
//         return `saya ${this.nama}. Hobi saya ${this.hobi}`
//     }
// }

// // ------- Try And Catch adalah penyelamat ------------------------------------------------------------------------ >

// cara : 1

// try {
//     Saya.kenalan();
// } catch{
//     console.log('error !!!');
// }

// // saya.kenalan();

// console.log('Setelah proses try and catch');


// cara : 2

function teriak(msg) {
    try{
        console.log(msg.toUpperCase());
    } catch (error) {
        console.log(error);
        console.log('Silahkan masukan tipe data string pada argument teriak()');
    }
}







