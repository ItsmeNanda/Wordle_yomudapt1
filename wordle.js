var height = 6; // Number of guesses
var width; // Length of the word, to be set dynamically

var row = 0; // Current guess (attempt #)
var col = 0; // Current letter for that attempt

var gameOver = false;
var wordList = [
    "jakarta", "bandung", "surabaya", "semarang", "yogyakarta", "malang",
];

var guessList = wordList.concat(wordList);

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

var explanations = {
    "JAKARTA": {
        text: "Jakarta, secara resmi bernama Daerah Khusus Ibukota Jakarta atau DKI Jakarta, sebelumnya dikenal sebagai Batavia adalah ibu kota Indonesia dan sekaligus daerah otonom setingkat provinsi. Jakarta memiliki lima kota administrasi dan satu kabupaten administrasi. Sementara itu menurut pengertian secara umum, Jakarta disebut sebagai kota metropolitan. <br><br> Jakarta terletak di pesisir bagian barat laut Pulau Jawa. Jakarta mendapat julukan The Big Durian karena dianggap kota yang sebanding dengan Kota New York (Big Apple) di Amerika Serikat. Jakarta memiliki luas sekitar 664,01 km² (lautan: 6.977,5 km²), dengan penduduk berjumlah 11.135.191 jiwa pada pertengahan tahun 2024. Sebagai pusat bisnis, politik, dan kebudayaan, Jakarta merupakan tempat berdirinya kantor-kantor pusat BUMN, perusahaan swasta, dan perusahaan asing. Kota ini juga menjadi tempat kedudukan lembaga-lembaga pemerintahan dan kantor sekretariat ASEAN. Jakarta dilayani oleh dua bandar udara, yaitu Bandara Internasional Soekarno–Hatta di Kota Tangerang, Banten dan Bandara Halim Perdanakusuma, serta dua pelabuhan laut, yaitu Tanjung Priok dan Sunda Kelapa.",
        imageUrl: "image/jakarta.jpg"
    },
    "BANDUNG": {
        text: "Kota Bandungadalah sebuah kota sekaligus menjadi ibu kota provinsi di Provinsi Jawa Barat, Indonesia. Kota Bandung juga merupakan kota terbesar keempat di Indonesia, setelah Jakarta, Kota Surabaya, dan Kota Medan. Kota ini menjadi kota terpadat kedua di Indonesia setelah Jakarta dengan kepadatan mencapai 15.051 jiwa/km2. Terletak 141 km di sebelah tenggara Jakarta, 363 km di sebelah barat laut Kota Semarang, 400 km di sebelah barat Kota Yogyakarta, 675 km (lewat Kota Semarang) & 765 km (lewat Kota Yogyakarta) di sebelah barat Kota Surabaya. Kota Bandung merupakan kota terbesar di bagian selatan Pulau Jawa. Pada akhir tahun 2023, jumlah penduduk Kota Bandung sebanyak 2.569.107 orang <br><br>Kota Bandung merupakan bagian dari Cekungan Bandung (Bandung Raya), kawasan metropolitan terbesar kedua di Indonesia setelah Jabodetabek. Kota Bandung berbatasan langsung dengan Kota Cimahi dan Kabupaten Bandung Barat di sisi barat dan utara, serta Kabupaten Bandung di sisi timur dan selatan.",
        imageUrl: "image/bandung.jpeg"
    },
    "SURABAYA": {
        text: "Kota Surabaya adalah ibu kota Provinsi Jawa Timur yang menjadi pusat pemerintahan dan perekonomian sekaligus kota terbesar di provinsi tersebut. Surabaya juga merupakan sebuah kota yang terletak di Provinsi Jawa Timur, Indonesia. Surabaya merupakan kota terbesar kedua di Indonesia setelah Kota Jakarta. Kota ini terletak 800 km sebelah timur Jakarta, atau 435 km sebelah barat laut Denpasar, Bali. Letak kota ini berada di pantai utara Pulau Jawa bagian timur yang berhadapan dengan Selat Madura serta Laut Jawa. <br><br></br>Surabaya dikenal dengan julukan Kota Pahlawan karena Pertempuran 10 November 1945, yaitu sejarah perjuangan Arek-Arek Suroboyo (Pemuda-pemuda Surabaya) dalam mempertahankan kemerdekaan bangsa Indonesia dari serangan sekutu. Surabaya juga sempat menjadi kota terbesar di Hindia Belanda dan menjadi pusat niaga di Nusantara yang sejajar dengan Hong Kong dan Shanghai saat itu. Menurut Bappenas, Kota Surabaya adalah satu dari empat kota pusat pertumbuhan di Indonesia, bersama dengan Medan, Jakarta, dan Makassar.",
        imageUrl: "image/surabaya.jpeg"
    },
    "SEMARANG": {
        text: "Kota Semarang adalah ibu kota provinsi Jawa Tengah, Indonesia. Kota ini adalah kota metropolitan terbesar kelima di Indonesia setelah Jakarta, Surabaya, Medan, dan Bandung. Kota Semarang memiliki jumlah penduduk sebanyak 1.876.211 jiwa, pada akhir tahun 2023.<br><br></br>Kota Semarang dipimpin oleh wali kota Hevearita Gunaryanti Rahayu sejak 30 Januari 2023. Kota ini terletak sekitar 477 km sebelah timur Jakarta, 312 km sebelah barat Surabaya, 363 km sebelah timur laut Kota Bandung, atau 621 km sebalah barat daya Banjarmasin (via udara). Semarang berbatasan dengan Laut Jawa di sebelah utara, Kabupaten Demak di sebelah timur, Kabupaten Semarang di sebelah selatan, dan Kabupaten Kendal disebelah barat. Kota Semarang memiliki luas wilayah administratif sebesar 373,70 km persegi, sekaligus merupakan administrasi kotamadya terluas di Pulau Jawa.",
        imageUrl: "image/semarang.jpeg"
    },
    "YOGYAKARTA": {
        text: "Kota Yogyakarta adalah ibu kota sekaligus pusat pemerintahan dan perekonomian dari provinsi Daerah Istimewa Yogyakarta, Indonesia. Kota ini adalah kota yang mempertahankan konsep tradisional dan budaya Jawa. Pada pertengahan tahun 2024, jumlah penduduk Kota Yogyakarta sebanyak 415.021 jiwa. Salah satu kemantren di Yogyakarta, yaitu Kotagede pernah menjadi pusat Kesultanan Mataram antara kurun tahun 1575-1640. Kini, Yogyakarta menjadi tempat tinggal dua penerus Mataram, yakni Sultan Hamengkubuwana dan Adipati Paku Alam, yang berada di Keraton Ngayogyakarta dan Pura Pakualaman. <br><br></br>Nama Yogyakarta berasal dari dua kata, yaitu Ayogya atau Ayodhya yang berarti. Ayodhya merupakan kota yang bersejarah di India di mana wiracarita Ramayana terjadi. Tapak Keraton Yogyakarta sendiri menurut babad (misalnya Babad Giyanti) dan leluri (riwayat oral) telah berupa sebuah dalem yang bernama Dalem Garjiwati; lalu dinamakan ulang oleh Susuhunan Pakubuwana II menjadi Dalem Ayogya.",
        imageUrl: "image/yogyakarta.jpeg"
    },
    "MALANG": {
        text: "Kota Malang adalah sebuah kota yang terletak di Provinsi Jawa Timur, Indonesia, Kota ini merupakan kota terbesar kedua di Jawa Timur setelah Surabaya, dan kota terbesar ke-12 di Indonesia. Kota ini didirikan pada masa Pemerintahan Belanda pada 1 April 1914 dengan E.K Broeveldt sebagai wali kota pertama. Kota ini terletak di dataran tinggi seluas 145,28 km²[8] yang merupakan enklave Kabupaten Malang.[9] Bersama dengan Kota Batu dan Kabupaten Malang, Kota Malang merupakan bagian dari kesatuan wilayah yang dikenal dengan Malang Raya. <br>Kota Malang dikenal baik sebagai Pusat kota pendidikan. Kota ini memiliki berbagai perguruan tinggi terbaik seperti Universitas Brawijaya, Universitas Negeri Malang, UIN Maulana Malik Ibrahim Malang, dan Politeknik Negeri Malang. Selain itu, kota ini merupakan kota pariwisata karena alamnya yang menawan yang dikelilingi oleh pegunungan dan udaranya yang cenderung sejuk. Malang juga terkenal sebagai kota bunga karena banyaknya bunga yang menghiasi kota. Kota Malang dikenal sebagai kota seni karena banyaknya kesenian khas dari kota ini, mulai dari tarian hingga pertunjukan, seperti Tari Topeng Malang.",
        imageUrl: "image/malang.jpeg"
    },
    "TANGERANG": {
        text: "Kota di Provinsi Banten, bagian dari wilayah metropolitan Jabodetabek.",
        imageUrl: "image/tangerang.jpg"
    },
    "BEKASI": {
        text: "Kota di Jawa Barat yang merupakan pusat industri dan pendukung Jakarta.",
        imageUrl: "image/bekasi.jpg"
    },
    "DEPOK": {
        text: "Kota di Provinsi Jawa Barat, terletak antara Jakarta dan Bogor.",
        imageUrl: "image/depok.jpg"
    },
    "BOGOR": {
        text: "Kota di Jawa Barat, terkenal dengan Istana Bogor dan Kebun Raya Bogor.",
        imageUrl: "image/bogor.jpg"
    },
    "CIREBON": {
        text: "Kota di pesisir utara Jawa Barat, terkenal dengan sejarah dan budaya pesisir.",
        imageUrl: "image/cirebon.jpg"
    },
    "SOLO": {
        text: "Kota di Jawa Tengah, juga dikenal sebagai Surakarta, pusat budaya Jawa.",
        imageUrl: "image/solo.jpg"
    },
    "TEGAL": {
        text: "Kota di pesisir utara Jawa Tengah, terkenal dengan warung tegal dan industrinya.",
        imageUrl: "image/tegal.jpg"
    },
    "KEDIRI": {
        text: "Kota di Jawa Timur, pusat industri rokok dan gula.",
        imageUrl: "image/kediri.jpg"
    },
    "SERANG": {
        text: "Ibukota Provinsi Banten, kota yang merupakan pusat pemerintahan dan ekonomi di Banten.",
        imageUrl: "image/serang.jpg"
    }
};


window.onload = function () {
    width = word.length; // Set the width based on the length of the word

    Swal.fire({
        title: 'Selamat Datang di Wordle!',
        html: `
            <div style="text-align: center; font-family: 'Comic Sans MS', cursive, sans-serif; color: #333;">
    <p style="font-size: 20px; color: #FF5733; font-weight: bold;">
        🎉 Menebak kota dalam 6 percobaan 🎉
    </p>
    <p style="font-size: 16px; color: #555;">
        Setiap tebakan harus berupa kata yang valid. Berikut adalah petunjuk untuk memahami hasil tebakanmu:
    </p>
    <ul style="list-style: none; padding: 0;text-align: left;">
        <li style="margin-bottom: 10px;">
            <strong style="color: #28a745;">🟩 Hijau</strong>: Huruf berada di posisi yang benar.
        </li>
        <li style="margin-bottom: 10px;">
            <strong style="color: #ffc107;">🟨 Kuning</strong>: Huruf berada di posisi yang salah.
        </li>
        <li style="margin-bottom: 10px;">
            <strong style="color: #6c7574;">⬛ Abu-abu</strong>: Huruf tidak ada dalam kata.
        </li>
    </ul>
    <p style="font-size: 18px; color: #007bff;">
        🤩 Selamat bermain! Semoga beruntung! 🤩
    </p>
</div>

        `,
        icon: 'info',
        confirmButtonText: 'Mulai Permainan',
        background: "#fff url(/image/modals.jpeg)",
        backdrop: `
    rgba(177, 177, 177, 0.49)
    url("/image/bg3.gif")
    left top
    repeat
  `

    }).then((result) => {
        if (result.isConfirmed) {
            initialize();
        }
    });
}

function initialize() {
    // Set the number of columns dynamically
    document.documentElement.style.setProperty('--width', width);

    // Create the game board
    const board = document.getElementById("board");
    board.innerHTML = ''; // Clear existing board if any

    // Set grid template columns based on the width (word length)
    board.style.gridTemplateColumns = `repeat(${width}, 60px)`; // Adjust width of the tile if needed

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            board.appendChild(tile);
        }
    }

    // Create the keyboard
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ]

    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key === "Enter") {
                keyTile.id = "Enter";
            } else if (key === "⌫") {
                keyTile.id = "Backspace";
            } else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key;
            }

            keyTile.addEventListener("click", processKey);

            if (key === "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey(e) {
    e = { "code": this.id };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText === "") {
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    } else if (e.code === "Backspace") {
        if (col > 0) {
            col -= 1;
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }
    } else if (e.code === "Enter") {
        update();
    }

    if (!gameOver && row === height) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
        showExplanation("Misi gagal", "Kamu tidak berhasil menebak kata dengan benar.");
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toUpperCase();
    console.log(guess);

    // Check if the guess is valid
    if (!wordList.includes(guess.toLowerCase())) {
        Swal.fire({
            title: 'Nama Kota Tidak Valid!',
            text: 'Kata yang Anda masukkan tidak terdaftar. Silakan coba kata lain.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Proceed with checking the guess against the correct word
    let correct = 0;
    let letterCount = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (word[c] === letter) {
            currTile.classList.add("correct");
            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");
            correct += 1;
            letterCount[letter] -= 1;
        }
    }

    if (correct === width) {
        gameOver = true;
        showExplanation("Misi selesai", `Kamu berhasil menebak kata "${word}".`);
    } else {
        for (let c = 0; c < width; c++) {
            let currTile = document.getElementById(row.toString() + '-' + c.toString());
            let letter = currTile.innerText;

            if (!currTile.classList.contains("correct")) {
                if (word.includes(letter) && letterCount[letter] > 0) {
                    currTile.classList.add("present");
                    let keyTile = document.getElementById("Key" + letter);
                    if (!keyTile.classList.contains("correct")) {
                        keyTile.classList.add("present");
                    }
                    letterCount[letter] -= 1;
                } else {
                    currTile.classList.add("absent");
                    let keyTile = document.getElementById("Key" + letter);
                    keyTile.classList.add("absent");
                }
            }
        }
    }

    row += 1;
    col = 0;
}

function showExplanation(title, message) {
    let explanation = explanations[word];
    Swal.fire({
        title: title,
        html: `
           <div style="text-align: center; font-family: 'Comic Sans MS', sans-serif; padding: 25px; background-color: #ffe4b5; border-radius: 20px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); max-width: 800px; margin: 0 auto;">
    <p style="font-size: 22px; color: #ff6347;"><strong>🎉 Jawaban yang Benar! 🎉</strong></p>
    <p style="font-size: 20px; color: #2e8b57; margin: 10px 0;">${message}</p>
    <p style="font-size: 28px; color: #ff4500; font-weight: bold; margin: 15px 0;">⭐ ${word} ⭐</p>
    ${explanation ? `
        <div>
            <p style="text-align: justify; font-size: 18px; color: #000000; margin-bottom: 15px;"><strong>🔍 Penjelasan:</strong><br><br> ${explanation.text}</p>
            <img src="${explanation.imageUrl}" alt="${word}" style="width: 100%; height: auto; border-radius: 15px; margin-top: 10px;">
        </div>
    ` : ''}
</div>


        `,
        icon: title === "Misi selesai" ? 'success' : 'error',
        confirmButtonText: 'Mulai Lagi',
        customClass: {
            popup: 'wide-modal' // Add custom class to popup
        },
        padding: "1em",
        background: "#fff url(/image/bg.jpe)",
        backdrop: `
    rgba(209, 237, 247)
    url("/image/bg1.gif")
    left top
    no-repeat
  `

    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
}

