// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let angka = 1; angka <=10; angka++) {
//     console.log('saya cinta kamu ')
//     console.log(angka);
// }


// for(let angka = 1; angka <=20; angka += 2) {
//     console.log(angka);
// }


// for(let angka = 20; angka >=0; angka--) {
//     console.log(angka);
// }

// for(let angka = 20; angka >=0; angka-=2) {
//     console.log(angka);
// }

// ---------- loop --------|

// for(let angka = 10; angka <= 100000; angka *=10){
//     console.log(angka);
// }

// ---------- Infinity loops --------|
// for(let angka = 20; angka >=0; angka++){
    //     console.log(angka);
    // }
    
    
    // ----------mendapatkan data array dengan perulangan--------|
    
    // const animals = ['cat', 'gozila', 'monyet', 'bebek'];
    
    // for(let angka = 0; angka < animals.length ; angka++){
    //     console.log(angka , animals[angka]);
    // }



// ----------nested loop--------|
// const pilihan = 'abcd';

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal Nomor ${i}:`);
//     for(let j = 0; j <= pilihan.length; j++) {
//         console.log(`${pilihan[j]}. Pilihan Jawaban`);
//     }
// }



// ----------mendapatkan data  dari nested array dengan nested loop -------|


// const studentRow = [
//     ['olivia', 'liam', 'emma', 'noah'],
//     ['amelia', 'oliver', 'Ava', 'Elijah'],
//     ['shopia', 'mateo', 'Isabela', 'lucas'],
// ];


// for(let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//    for(let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//    }
// }

// ---------- perulangan mengunakan perintah while --------|
                                                           
// let num = 0;                                            
// while (num < 10) {                                      
//     console.log(num);
//     num++;
// }

// for(let num = 0; num < 10;  num++) {
//     console.log(num);
// }


// -------------- studi kasus --------------- |

// const password = 'pass123';

// let guess = prompt('enter the password');

// while (guess !== password) {
    //     guess = prompt('enter the password');
    // }
    
    // alert('congrats! the  password is coorect');
    
    
// -------------- kata kunci 'Break' untuk memberentihkan perulangan --------------- |

// let input = prompt('hei , say something!');

// while (true) {
    //     input = prompt(input);
    //     if (input.toLowerCase() === 'stop') break;
    // }
    // alert('ok');
    
    
    // for (let i = 0; i < 10000; i++) {
        //     console.log(i);
        //     if (i === 100) break;
        // }
        
 // -------------- Game tebak-tebakan angka dengan while --------------- |
 
 // let maximum = parseInt(prompt('Masukan nilai maksimal!'));
 
 // while(!maximum) {
     //     maximum = parseInt(prompt('Masukan nilai maksimal!'));
     // }
     
     // const targetNum = Math.floor(Math.random() * maximum) + 1;
     // console.log(targetNum);
     
     // let guess = parseInt(prompt('isi tebakan pertama kamu!'));
     // let attempts = 1;
     
     // while (parseInt(guess) !== targetNum) {
         //     attempts++;
         //     if (guess > targetNum) {
             //         guess = prompt ('Terlalu tinggi! tebak lagi :');
             //     } else {
                 //         guess = prompt ('Terlalu rendah! tebak lagi :');
                 //     }
                 // }   
                 
                 // alert(`selamat tebakan anda benar !! dengan percobaan ${attempts} kali`);




                 
 // -------------- cara elegan melakukan  perulangan  pasda array For of--------------- |
 
  const buah = ['banana', 'lemon', 'apel', 'anggur'];
 
 //  cara biasa
 
 //  for(let i = 0; i < buah.length; i++) {
     //     console.log(`Buah ${buah[i]}`);
     //  }
     
     
     // cara for of 
     
     for(let buahan of buah ) {
             console.log(`Buah ${buahan}`);
         }
         
         
         const studentRow = [
                 ['olivia', 'liam', 'emma', 'noah'],
                 ['amelia', 'oliver', 'Ava', 'Elijah'],
                 ['shopia', 'mateo', 'Isabela', 'lucas'],
             ];
             
             
             
             for (let row of studentRow ) {
                     for(let student of row) {
                             console.log(student)
                         }
                     }
                     
                     
// // -------------- Melakukan perulangan pada object for in --------------- |

// const studentScore = {
//     olivia: 20,
//     Liam: 13,
//     Emma: 40,
//     Noah: 18,
//     Amelia: 32,
//     Oliver: 10,
//     Ava: 11,
//     Elijah: 21,
//     Shopia: 14,
//     Mateo: 22,
// }

// // for (let student in studentScore ) {
// //     console.log(`${student} memiliki skor ${studentScore[student]}`);
// // }

// let total = 0;
// let scores = Object.values(studentScore);
// for(let score of scores ) {
//     total += score;
// }
// console.log(total / scores.length);