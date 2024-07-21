

// ---------------- Mengatur Default Value Pada Function start ------>

// function LemparDadu(sisi = 6) {
//     return Math.floor(Math.random() * sisi) + 1;
// } 


// function sapa(name, msg) {
//     console.log(`${name} ${msg}`)
// }


// function sapa(name = 'Fansya', msg = 'jangan menyerah') {
//     console.log(`${name} ${msg}`)
// }



// function sapa(msg = 'jangan menyerah',name) { //name nya ditaruh di awal 
//     console.log(`${name} ${msg}`)
// }



// ---------------- Mengatur Default Value Pada Function start ------>




// ---------------- Menggabungkan Nilai Array Dengan Array Lagi start ------>

// const angka = [1,2,3,4,5,6,7,8,9,]

// const nama = ['aryo','agus','qolbi','bapak','adek'];

// const campuran = [...angka, ...nama];

// ---------------- Menggabungkan Nilai Array Dengan Array Lagi end ------>






// ---------------- Menggabungkan Property Object Dengan Object Lainnya stat ------>

// const user = {
//     nama: 'jhon',
//     email: 'ahmadansya@gmail.com',
// };



// const credintial = {
//     password: 'password',
//     token: 'udhada12812',
// }


// const userBaru = {...user, id:123, password:'password'};


// const userBaru = {...user, ...credintial};


// ---------------- Menggabungkan Property Object Dengan Object Lainnya end ------>



// ---------------- Malas Bikin Parameter Banyak Bisa Pakai Rest Param start------>

// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };


// const nama = ['aryo','agus','qolbi','bapak','adek'];


// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali emas  diraih: ${gold}`);
//     console.log(`Medali silver  diraih: ${silver}`);
//     console.log(`Medali bronze  diraih: ${bronze}`);
//     console.log(`Peserta lainya: ${sisa}`)
// };

// ---------------- Malas Bikin Parameter Banyak Bisa Pakai Rest Param end------>


// ---------------- Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah start ------->

// const nama = ['aryo','agus','qolbi','bapak','adek','felix','grey'];

// const [gold, silver, bronze, ...peserta] = nama


// ---------------- Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah end ------->






// ---------------- Bongkar Juga Properti Object Ke Masing-Masing Variabel start ------->

// const user = {
//     nama: 'jhon',
//     email: 'ahmadansya@gmail.com',
// };

// const {nama:name, email, phone = '082239841198'} = user;

// ---------------- Bongkar Juga Properti Object Ke Masing-Masing Variabel end ------->



// ---------------- Bongkar Properti Object Bisa Dilakukan Di Dalam Function start ------->


const user = {
    nama: 'jhon',
    email: 'ahmadansya@gmail.com',
    role: 'Admin',
};

const userAndRole = ({nama, role}) => {
    return `${nama} ${role}`;
};


const animes = [
    {
        title: 'Attack on titan',
        rating: 78,
        year: 2019
    },
    {
        title: 'Bleach',
        rating: 90,
        year: 2000
    },
    {
        title: 'One Piece',
        rating: 100,
        year: 1999
    },
    {
        title: 'grand blue',
        rating: 70,
        year: 2022
    },
    {
        title: 'Naruto',
        rating: 76,
        year: 2004
    },
];


// const anime = animes.map((anime) => {
//     return `${anime.title} (${anime.year}) rating  ${anime.rating}`;
// });

//#2

const anime = animes.map(({title, year, rating}) => {
    return `${title} (${year}) rating  ${rating}`;
});


// ---------------- Bongkar Properti Object Bisa Dilakukan Di Dalam Function end ------->

















