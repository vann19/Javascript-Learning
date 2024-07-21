
// ---- Foreach Method start ---------------->


//  const angka = [1,2,3,4,5,6,7,8,9];


//  function print(element) {
//     console.log(element)
//  }

// angka.forEach(print);


//---- #2------->

// angka.forEach(function (el){
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });


//--------- membuat daftar list anime ---------- >

// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 100,
//     },{
//         title: 'Bleach',
//         rating: 91,
//     },
//     {
//         title: 'grand blue',
//         rating: 70,
//     },
//     {
//         title: 'Naruto',
//         rating: 100,
//     },
// ];


// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// })

// ---- Foreach Method end ---------------->






// ---- Map Method star ---------------->

// const angka = [1,2,3,4,5,6,7,8,9];

// const angkaDouble = angka.map(function(num){
//     return num * 2;
// })




// //---------- #2 ------------------>

// const animeList = animes.map(function (anime){
//     return anime.title.toUpperCase();
// })




// ---- Map Method end ---------------->




// ---- Arrow Function pengenalan start ---------------->

// function umum

// function perpangkatan(x) {
//     return x * x;

// }

// const hasil = perpangkatan(5)


//function expersion

// const hasil  = function(x) {
//     return x * x;

// }


// arrow function

// const perpangkatan = (x) => {
//     return x * x;
// }


// const random = () => {
//     return Math.floor(Math.random() * 1000);
// }

// ---- Arrow Function pengenalan end ---------------->




// ---- Return  Secara implisit dari  Arrow function start ---------------->

// const random = () => (


//     Math.floor(Math.random() * 1000) // tanpa petik koma

// );


// const add = (a,b) => a + b



// ---- Return  Secara implisit dari  Arrow function end ---------------->




// ---- Memahami settimeout dan seinterval start ---------------->

//-- setTimeout --->

// console.log('hallo.... !');

// setTimeout(() => {
//     console.log('masih ada orang gak ... ?');
// }, 5000);

// console.log('saya pergi yahh');



//-- setInterval --->

// setInterval(() => {
//     console.log(Math.random());
// }, 2000)


// cara memberhentikan inteval dengan mengunakan , clearInteval(interval)

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 2000)


// ---- Memahami settimeout dan seinterval end ---------------->





// ---- Memahami data tertentu di dalam Array dengan Filter Method start ---------------->

// const angka = [1,2,3,4,5,6,7,8,9];

// const angkaGanjil = angka.filter((n) => {
//     return n % 2 === 1;
// })

// const angkaBaru = angka.filter((n) => {
//     return n < 5
// })


// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 100,
//     },{
//         title: 'Bleach',
//         rating: 91,
//     },
//     {
//         title: 'grand blue',
//         rating: 70,
//     },
//     {
//         title: 'Naruto',
//         rating: 100,
//     },
// ];



// const animeBagus = animes.filter((anime) => anime.rating >= 85 ); 
// const animecukupBagus = animes.filter((anime) => anime.rating < 85 ); 
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);


// ---- Memahami data tertentu di dalam Array dengan Filter Method end ---------------->







// ---- Menentukan Benar atau salah Pada Array dengan Every Dan some Method start ---------------->


// const nilaiUjian = [80,90,91,78,87,100];
// const Proses = nilaiUjian.every((nilai) => nilai >= 75 );



// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 90,
//         year: 2019
//     },
//     {
//         title: 'One Piece',
//         rating: 100,
//         year: 1999
//     },{
//         title: 'Bleach',
//         rating: 91,
//         year: 2000
//     },
//     {
//         title: 'grand blue',
//         rating: 70,
//         year: 2022
//     },
//     {
//         title: 'Naruto',
//         rating: 100,
//         year: 2004
//     },
// ];

// const isiAnimeListNew = animes.some((anime) => anime.year > 2010)



// ---- Menentukan Benar atau salah Pada Array dengan Every Dan some Method end ---------------->




// ---- Mendapatkan satu nilai sesuai kondisi  dari sebuah array dengan Reduce start ---------------->

// const Nilaiujian = [80, 85, 70, 90, 93, 77];

// const total = Nilaiujian.reduce((total, score) => {
//     return total + score;

// })



// const animes = [
//     {
//         title: 'Attack on titan',
//         rating: 78,
//         year: 2019
//     },
//     {
//         title: 'Bleach',
//         rating: 90,
//         year: 2000
//     },
//     {
//         title: 'One Piece',
//         rating: 100,
//         year: 1999
//     },
//     {
//         title: 'grand blue',
//         rating: 70,
//         year: 2022
//     },
//     {
//         title: 'Naruto',
//         rating: 76,
//         year: 2004
//     },
// ];

// const Bestanime = animes.reduce((Bestanime, currAnime) => {
//     console.log(Bestanime, currAnime);
//     if(currAnime.rating > Bestanime.rating) {
//         return currAnime;
//     }
//     return Bestanime;
// })

// ---- Mendapatkan satu nilai sesuai kondisi  dari sebuah array dengan Reduce end ---------------->



// ---- Object This Di Dalam Arrow Function Mengarah Pada Object Global Window start ---------------->



//reguler function

// const orang = {
//     namaDepan: 'La Ode Muhammad',
//     namaBelakang: 'Nurfasnsyah',

//     nama_lengkap: function() {
//         return `${this.namaDepan} ${this.namaBelakang}`;
//     }
// }


// mengunaka arrow function #2

const orang = {
    namaDepan: 'La Ode Muhammad',
    namaBelakang: 'Nurfasnsyah',

    nama_lengkap: () => {
        return `${this.namaDepan} ${this.namaBelakang}`;
    },

    panggil_nanti: function() {
        setTimeout(function () {
            console.log(this.namaDepan);
        }, 3000);
    },

};








// ---- Object This Di Dalam Arrow Function Mengarah Pada Object Global Window end ---------------->








