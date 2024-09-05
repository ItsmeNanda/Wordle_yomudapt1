var height = 6; // Number of guesses
var width; // Length of the word, to be set dynamically

var row = 0; // Current guess (attempt #)
var col = 0; // Current letter for that attempt

var gameOver = false;
var wordList = [
    "makan", "minum", "jakarta"
];

var guessList = wordList.concat(wordList);

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

var explanations = {
    "BANDAACEH": "Ibukota Provinsi Aceh, terkenal dengan sejarah dan budaya lokal serta tsunami besar 2004.",
    "DENPASAR": "Ibukota Provinsi Bali, pusat budaya dan pariwisata di pulau Bali.",
    "SERANG": "Ibukota Provinsi Banten, kota yang merupakan pusat pemerintahan dan ekonomi di Banten.",
    "BENGKULU": "Ibukota Provinsi Bengkulu, terkenal dengan pantai dan objek wisata sejarah.",
    "YOGYAKARTA": "Ibukota Provinsi DI Yogyakarta, pusat kebudayaan Jawa dengan banyak situs sejarah dan keraton.",
    "JAKARTA": "Ibukota negara Indonesia, pusat pemerintahan, ekonomi, dan budaya."
};

window.onload = function () {
    width = word.length; // Set the width based on the length of the word

    Swal.fire({
        title: 'Selamat Datang di Wordle!',
        html: `
            <div style="text-align: left;">
                <p>Cobalah menebak kata dalam 6 percobaan. Setiap tebakan harus berupa kata yang valid.</p>
                <ul>
                    <li><strong>Hijau</strong>: Huruf berada di posisi yang benar.</li>
                    <li><strong>Kuning</strong>: Huruf ada dalam kata tetapi di posisi yang salah.</li>
                    <li><strong>Abu-abu</strong>: Huruf tidak ada dalam kata.</li>
                </ul>
                <p>Selamat bermain!</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Mulai Permainan'
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
    Swal.fire({
        title: title,
        html: `
            <div style="text-align: left;">
                <p><strong>Jawaban yang benar:</strong> ${word}</p>
                <p>${message}</p>
                <p>${explanations[word] ? `<strong>Penjelasan:</strong> ${explanations[word]}` : ''}</p>
            </div>
        `,
        icon: title === "Misi selesai" ? 'success' : 'error',
        confirmButtonText: 'Mulai Lagi'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    });
}