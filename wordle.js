var height = 6; // Number of guesses
var width; // Length of the word, to be set dynamically

var row = 0; // Current guess (attempt #)
var col = 0; // Current letter for that attempt

var gameOver = false;
var wordList = [
    "jakarta", "bandung", "surabaya", "semarang", "yogyakarta", "malang", "tangerang", "bekasi", "depok", "bogor", "cirebon", "solo", "tegal", "kediri", "serang"
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
        text: "Kota Tangerang adalah kota yang terletak di Provinsi Banten, Indonesia. Kota ini terletak tepat di sebelah barat DKI Jakarta. Penduduk pribuminya adalah Suku Sunda. Pada pertengahan tahun 2024, jumlah penduduk kota Tangerang sebanyak 1.927.815 dengan kepadatan 12.000 jiwa/km2.<br>Tangerang merupakan kota terbesar di Provinsi Banten, serta ketiga terbesar di kawasan metropolitan Jakarta Raya setelah Kota Bekasi dan Kota Depok. Selain itu, kepolisian di kota ini juga setara dengan wilayah kota penyangga Jakarta lainnya seperti, Kota Depok, Kota Tangerang Selatan dan Kota Bekasi, yang di mana kepolisiannya berkedudukan di wilayah hukum Polda Metro Jaya dan wilayah pertahanan Kodam Jaya.",
        imageUrl: "image/tanggerang.jpeg"
    },
    "BEKASI": {
        text: "Kota Bekasi adalah salah satu kota di Provinsi Jawa Barat, Indonesia. Kota ini berbatasan langsung dengan DKI Jakarta dari arah barat. Pada pertengahan tahun 2024, jumlah penduduk Kota Bekasi berjumlah 2.526.133 jiwa. Meskipun berstatus kota penyangga, kota ini merupakan kota terbesar di Provinsi Jawa Barat menurut jumlah penduduk. <br>Kota Bekasi merupakan bagian dari kawasan metropolitan Jakarta Raya dan menjadi kota penyangga dengan jumlah penduduk terbanyak se-Indonesia. Saat ini Kota Bekasi berkembang menjadi tempat tinggal kaum urban dan sentra industry.Kota di Jawa Barat yang merupakan pusat industri dan pendukung Jakarta.",
        imageUrl: "image/bekasi.jpeg"
    },
    "DEPOK": {
        text: "Kota Depok adalah sebuah kota yang terletak di Provinsi Jawa Barat, Indonesia. Kota Depok merupakan bagian dari kawasan metropolitan Jabodetabekpunjur dan berada di bagian selatan Daerah Khusus Ibukota Jakarta. Kota Depok dibentuk dari wilayah Kota Administratif Depok dengan penambahan wilayah dari Kecamatan Limo, Kecamatan Cimanggis, dan Kecamatan Sawangan, serta sebagian desa dari Kecamatan Bojonggede yang digabungkan dengan Kecamatan Pancoran Mas. Tanggal peresmian Kota Depok ditetapkan sebagai Hari Jadi Kota Depok. Jumlah penduduk kota Depok berdasarkan data Kementerian Dalam Negeri Republik Indonesia pada pertengahan tahun 2023 sebanyak 1.927.867 jiwa.",
        imageUrl: "image/depok.jpeg"
    },
    "BOGOR": {
        text: "Kota Bogor adalah sebuah kota yang terletak di Provinsi Jawa Barat, Indonesia. Kota ini terletak 59 km di sebelah selatan Jakarta, dan merupakan enklave Kabupaten Bogor. Pada akhir tahun 2024, jumlah penduduk Kota Bogor sebanyak 1.137,859 jiwa, dengan kepadatan 10.208 jiwa/km².<br>Kota Bogor dikenal dengan julukan Kota Hujan, karena memiliki curah hujan yang lumayan sangat tinggi. Kota Bogor terdiri atas 6 kecamatan yang dibagi lagi atas sejumlah 68 kelurahan. Pada masa Kolonial Hindia Belanda, Kota Bogor dikenal dengan nama Buitenzorg yang berarti tanpa kecemasan atau aman tentram.",
        imageUrl: "image/bogor.jpeg"
    },
    "CIREBON": {
        text: "Kota Cirebon adalah salah satu kota yang berada di provinsi Jawa Barat, Indonesia. Kota ini berada di pesisir utara Pulau Jawa yang menghubungkan Jakarta dengan Surabaya di lintas utara dan tengah Jawa. Pada pertengahan tahun 2023, jumlah penduduk kota Cirebon sebanyak 348.912 jiwa, dengan kepadatan 9.194 jiwa/km2.<br>Pada awalnya Cirebon berasal dari kata sarumban,[6] Cirebon adalah sebuah dukuh kecil yang dibangun oleh Ki Gedeng Tapa. Lama-kelamaan Cirebon berkembang menjadi sebuah desa yang ramai yang kemudian diberi nama Caruban[7] (carub dalam bahasa Jawa artinya bersatu padu). Diberi nama demikian karena di sana bercampur para pendatang dari beraneka bangsa di antaranya Jawa, Sunda, Tionghoa, dan unsur-unsur budaya bangsa Arab), agama, bahasa, dan adat istiadat. kemudian pelafalan kata caruban berubah lagi menjadi carbon dan kemudian cirebon.<br><br>Selain karena faktor penamaan tempat penyebutan kata cirebon juga dikarenakan sejak awal mata pencaharian sebagian besar masyarakat adalah nelayan, maka berkembanglah pekerjaan menangkap ikan dan rebon (udang kecil) di sepanjang pantai, serta pembuatan terasi, petis dan garam. Dari istilah air bekas pembuatan terasi yang terbuat dari sisa pengolahan udang rebon inilah berkembang sebutan cai-rebon (bahasa Sunda: air rebon), yang kemudian menjadi cirebon.[8]",
        imageUrl: "image/cirebon.jpeg"
    },
    "SOLO": {
        text: "Kota Surakarta adalah salah satu kota di provinsi Jawa Tengah, Indonesia, dengan luas 44,04 km2. Pada 2020, penduduk Surakarta sebanyak 522.364 jiwa, dengan kepadatan sebanyak 11.861 jiwa/km2, dan pada akhir tahun 2023, jumlah penduduk Surakarta sebanyak 587.646 jiwa.<br><br>Kota ini merupakan kota terbesar ketiga di pulau Jawa bagian selatan setelah Kota Malang, Jawa Timur dan Kota Bandung, Jawa Barat menurut jumlah penduduk. Sisi Timur kota ini dilewati sungai yang terabadikan dalam salah satu lagu keroncong, Bengawan Solo. Kota ini termasuk dalam kawasan Solo Raya, sebagai kota utama.<br><br>Bersama dengan Yogyakarta, Surakarta merupakan pewaris Kerajaan Mataram Islam yang dipecah melalui Perjanjian Giyanti, pada tahun 1755, sehingga Surakarta menjadi kediaman Susuhunan Pakubuwana dan Adipati Mangkunegara.",
        imageUrl: "image/solo.jpeg"
    },
    "TEGAL": {
        text: "Kota Tegal adalah sebuah satu kota di Provinsi Jawa Tengah, Indonesia. Kota ini pernah menjadi cikal-bakal berdirinya Korps Marinir seperti tercatat dalam Pangkalan IV ALRI Tegal dengan nama Corps Mariniers, pada 15 November 1945. Kota Tegal berbatasan dengan Kabupaten Brebes di sebelah barat, Laut Jawa di sebelah utara, serta Kabupaten Tegal di sebelah selatan dan timur. Hari jadi Kota Tegal adalah 12 April 1580.",
        imageUrl: "image/tegal.jpeg"
    },
    "KEDIRI": {
        text: "Kota Kediri adalah sebuah kota yang berada di provinsi Jawa Timur, Indonesia. Kota ini terletak sekitar 130 km sebelah Barat Daya Kota Surabaya dan merupakan kota terbesar ketiga di provinsi Jawa Timur setelah Kota Surabaya dan Kota Malang menurut jumlah penduduk. Kota Kediri merupakan kota tertua yang ada di Jawa Timur. Kota Kediri memiliki luas wilayah 63,40 km² . dan seluruh wilayahnya merupakan enklave dari Kabupaten Kediri. Kota Kediri terbelah oleh Sungai Brantas yang membujur dari Selatan ke Utara sepanjang 7 kilometer. Penduduk kota ini berjumlah 289.418 jiwa, berdasarkan data Badan Pusat Statistik Kota Kediri tahun 2023.<br><br>Kediri dikenal merupakan salah satu pusat produksi gula dan industri rokok terbesar di Indonesia. Perusahaan rokok Gudang Garam berpusat di kota ini.",
        imageUrl: "image/kediri.jpeg"
    },
    "SERANG": {
        text: "Kota Serang merupakan salah satu kota dan sekaligus menjadi ibu kota provinsi di Provinsi Banten, Indonesia. Kota ini berada di bagian barat laut Provinsi Banten, serta dikelilingi oleh Kabupaten Serang di sebelah selatan, barat, dan timur, dan Laut Jawa di sebelah utara. Kota Serang dilintasi Jalan Tol Jakarta–Merak dan juga dilintasi oleh Jalur kereta api Merak–Tanah Abang. Kota ini berada di wilayah metropolitan Serang Raya.<br><br>Kota Serang adalah kota yang berperan sebagai pusat budaya Sunda Banten dan Jawa Serang, serta penduduknya menuturkan Bahasa Sunda Banten dan juga Bahasa Jawa Serang. Di Kota ini terdapat sisa-sisa bangunan bersejarah masa kejayaan Kesultanan Banten. Pada pertengahan tahun 2023, jumlah penduduk Kota Serang sebanyak 735.651 jiwa, dengan kepadatan 2.700 jiwa/km2.",
        imageUrl: "image/serang.jpeg"
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

