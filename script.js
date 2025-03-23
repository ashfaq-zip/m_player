document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const startBtn = document.getElementById('startBtn');
    const introContainer = document.querySelector('.intro-container');
    const playerContainer = document.getElementById('playerContainer');
    const logo = document.getElementById('logo');
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const trackTitle = document.getElementById('trackTitle');
    const albumName = document.getElementById('albumName');
    const albumArt = document.getElementById('albumArt');
    const playlistEl = document.getElementById('playlist');

    // State
    let isPlaying = false;
    let currentTrackIndex = 0;


    const playlist = [
        {
            "title": "Al-Fatiha",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/001.mp3",
            "art": "images/001.jpg"
        },
        {
            "title": "Al-Baqarah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/002.mp3",
            "art": "images/002.jpg"
        },
        {
            "title": "Aal-E-Imran",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/003.mp3",
            "art": "images/003.jpg"
        },
        {
            "title": "An-Nisa",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/004.mp3",
            "art": "images/004.jpg"
        },
        {
            "title": "Al-Ma'idah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/005.mp3",
            "art": "images/005.jpg"
        },
        {
            "title": "Al-An'am",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/006.mp3",
            "art": "images/006.jpg"
        },
        {
            "title": "Al-A'raf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/007.mp3",
            "art": "images/007.jpg"
        },
        {
            "title": "Al-Anfal",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/008.mp3",
            "art": "images/008.jpg"
        },
        {
            "title": "At-Tawbah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/009.mp3",
            "art": "images/009.jpg"
        },
        {
            "title": "Yunus",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/010.mp3",
            "art": "images/010.jpg"
        },
        {
            "title": "Hud",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/011.mp3",
            "art": "images/011.jpg"
        },
        {
            "title": "Yusuf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/012.mp3",
            "art": "images/012.jpg"
        },
        {
            "title": "Ar-Ra'd",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/013.mp3",
            "art": "images/013.jpg"
        },
        {
            "title": "Ibrahim",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/014.mp3",
            "art": "images/014.jpg"
        },
        {
            "title": "Al-Hijr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/015.mp3",
            "art": "images/015.jpg"
        },
        {
            "title": "An-Nahl",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/016.mp3",
            "art": "images/016.jpg"
        },
        {
            "title": "Al-Isra",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/017.mp3",
            "art": "images/017.jpg"
        },
        {
            "title": "Al-Kahf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/018.mp3",
            "art": "images/018.jpg"
        },
        {
            "title": "Maryam",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/019.mp3",
            "art": "images/019.jpg"
        },
        {
            "title": "Taha",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/020.mp3",
            "art": "images/020.jpg"
        },
        {
            "title": "Al-Anbiya",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/021.mp3",
            "art": "images/021.jpg"
        },
        {
            "title": "Al-Hajj",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/022.mp3",
            "art": "images/022.jpg"
        },
        {
            "title": "Al-Mu'minun",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/023.mp3",
            "art": "images/023.jpg"
        },
        {
            "title": "An-Nur",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/024.mp3",
            "art": "images/024.jpg"
        },
        {
            "title": "Al-Furqan",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/025.mp3",
            "art": "images/025.jpg"
        },
        {
            "title": "Ash-Shu'ara",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/026.mp3",
            "art": "images/026.jpg"
        },
        {
            "title": "An-Naml",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/027.mp3",
            "art": "images/027.jpg"
        },
        {
            "title": "Al-Qasas",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/028.mp3",
            "art": "images/028.jpg"
        },
        {
            "title": "Al-Ankabut",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/029.mp3",
            "art": "images/029.jpg"
        },
        {
            "title": "Ar-Rum",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/030.mp3",
            "art": "images/030.jpg"
        },
        {
            "title": "Luqman",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/031.mp3",
            "art": "images/031.jpg"
        },
        {
            "title": "As-Sajda",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/032.mp3",
            "art": "images/032.jpg"
        },
        {
            "title": "Al-Ahzab",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/033.mp3",
            "art": "images/033.jpg"
        },
        {
            "title": "Saba",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/034.mp3",
            "art": "images/034.jpg"
        },
        {
            "title": "Fatir",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/035.mp3",
            "art": "images/035.jpg"
        },
        {
            "title": "Ya-Sin",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/036.mp3",
            "art": "images/036.jpg"
        },
        {
            "title": "As-Saffat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/037.mp3",
            "art": "images/037.jpg"
        },
        {
            "title": "Sad",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/038.mp3",
            "art": "images/038.jpg"
        },
        {
            "title": "Az-Zumar",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/039.mp3",
            "art": "images/039.jpg"
        },
        {
            "title": "Ghafir",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/040.mp3",
            "art": "images/040.jpg"
        },
        {
            "title": "Fussilat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/041.mp3",
            "art": "images/041.jpg"
        },
        {
            "title": "Ash-Shura",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/042.mp3",
            "art": "images/042.jpg"
        },
        {
            "title": "Az-Zukhruf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/043.mp3",
            "art": "images/043.jpg"
        },
        {
            "title": "Ad-Dukhan",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/044.mp3",
            "art": "images/044.jpg"
        },
        {
            "title": "Al-Jathiya",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/045.mp3",
            "art": "images/045.jpg"
        },
        {
            "title": "Al-Ahqaf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/046.mp3",
            "art": "images/046.jpg"
        },
        {
            "title": "Muhammad",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/047.mp3",
            "art": "images/047.jpg"
        },
        {
            "title": "Al-Fath",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/048.mp3",
            "art": "images/048.jpg"
        },
        {
            "title": "Al-Hujurat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/049.mp3",
            "art": "images/049.jpg"
        },
        {
            "title": "Qaf",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/050.mp3",
            "art": "images/050.jpg"
        },
        {
            "title": "Adh-Dhariyat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/051.mp3",
            "art": "images/051.jpg"
        },
        {
            "title": "At-Tur",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/052.mp3",
            "art": "images/052.jpg"
        },
        {
            "title": "An-Najm",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/053.mp3",
            "art": "images/053.jpg"
        },
        {
            "title": "Al-Qamar",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/054.mp3",
            "art": "images/054.jpg"
        },
        {
            "title": "Ar-Rahman",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/055.mp3",
            "art": "images/055.jpg"
        },
        {
            "title": "Al-Waqi'a",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/056.mp3",
            "art": "images/056.jpg"
        },
        {
            "title": "Al-Hadid",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/057.mp3",
            "art": "images/057.jpg"
        },
        {
            "title": "Al-Mujadila",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/058.mp3",
            "art": "images/058.jpg"
        },
        {
            "title": "Al-Hashr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/059.mp3",
            "art": "images/059.jpg"
        },
        {
            "title": "Al-Mumtahina",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/060.mp3",
            "art": "images/060.jpg"
        },
        {
            "title": "As-Saff",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/061.mp3",
            "art": "images/061.jpg"
        },
        {
            "title": "Al-Jumu'a",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/062.mp3",
            "art": "images/062.jpg"
        },
        {
            "title": "Al-Munafiqun",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/063.mp3",
            "art": "images/063.jpg"
        },
        {
            "title": "At-Taghabun",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/064.mp3",
            "art": "images/064.jpg"
        },
        {
            "title": "At-Talaq",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/065.mp3",
            "art": "images/065.jpg"
        },
        {
            "title": "At-Tahrim",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/066.mp3",
            "art": "images/066.jpg"
        },
        {
            "title": "Al-Mulk",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/067.mp3",
            "art": "images/067.jpg"
        },
        {
            "title": "Al-Qalam",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/068.mp3",
            "art": "images/068.jpg"
        },
        {
            "title": "Al-Haqqah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/069.mp3",
            "art": "images/069.jpg"
        },
        {
            "title": "Al-Ma'arij",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/070.mp3",
            "art": "images/070.jpg"
        },
        {
            "title": "Nuh",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/071.mp3",
            "art": "images/071.jpg"
        },
        {
            "title": "Al-Jinn",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/072.mp3",
            "art": "images/072.jpg"
        },
        {
            "title": "Al-Muzzammil",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/073.mp3",
            "art": "images/073.jpg"
        },
        {
            "title": "Al-Muddathir",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/074.mp3",
            "art": "images/074.jpg"
        },
        {
            "title": "Al-Qiyamah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/075.mp3",
            "art": "images/075.jpg"
        },
        {
            "title": "Al-Insan",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/076.mp3",
            "art": "images/076.jpg"
        },
        {
            "title": "Al-Mursalat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/077.mp3",
            "art": "images/077.jpg"
        },
        {
            "title": "An-Naba",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/078.mp3",
            "art": "images/078.jpg"
        },
        {
            "title": "An-Nazi'at",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/079.mp3",
            "art": "images/079.jpg"
        },
        {
            "title": "Abasa",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/080.mp3",
            "art": "images/080.jpg"
        },
        {
            "title": "At-Takwir",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/081.mp3",
            "art": "images/081.jpg"
        },
        {
            "title": "Al-Infitar",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/082.mp3",
            "art": "images/082.jpg"
        },
        {
            "title": "Al-Mutaffifin",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/083.mp3",
            "art": "images/083.jpg"
        },
        {
            "title": "Al-Inshiqaq",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/084.mp3",
            "art": "images/084.jpg"
        },
        {
            "title": "Al-Buruj",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/085.mp3",
            "art": "images/085.jpg"
        },
        {
            "title": "At-Tariq",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/086.mp3",
            "art": "images/086.jpg"
        },
        {
            "title": "Al-A'la",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/087.mp3",
            "art": "images/087.jpg"
        },
        {
            "title": "Al-Ghashiyah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/088.mp3",
            "art": "images/088.jpg"
        },
        {
            "title": "Al-Fajr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/089.mp3",
            "art": "images/089.jpg"
        },
        {
            "title": "Al-Balad",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/090.mp3",
            "art": "images/090.jpg"
        },
        {
            "title": "Ash-Shams",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/091.mp3",
            "art": "images/091.jpg"
        },
        {
            "title": "Al-Lail",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/092.mp3",
            "art": "images/092.jpg"
        },
        {
            "title": "Ad-Duha",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/093.mp3",
            "art": "images/093.jpg"
        },
        {
            "title": "Ash-Sharh",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/094.mp3",
            "art": "images/094.jpg"
        },
        {
            "title": "At-Tin",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/095.mp3",
            "art": "images/095.jpg"
        },
        {
            "title": "Al-Alaq",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/096.mp3",
            "art": "images/096.jpg"
        },
        {
            "title": "Al-Qadr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/097.mp3",
            "art": "images/097.jpg"
        },
        {
            "title": "Al-Bayyinah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/098.mp3",
            "art": "images/098.jpg"
        },
        {
            "title": "Az-Zalzalah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/099.mp3",
            "art": "images/099.jpg"
        },
        {
            "title": "Al-Adiyat",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/100.mp3",
            "art": "images/100.jpg"
        },
        {
            "title": "Al-Qari'ah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/101.mp3",
            "art": "images/101.jpg"
        },
        {
            "title": "At-Takathur",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/102.mp3",
            "art": "images/102.jpg"
        },
        {
            "title": "Al-Asr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/103.mp3",
            "art": "images/103.jpg"
        },
        {
            "title": "Al-Humazah",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/104.mp3",
            "art": "images/104.jpg"
        },
        {
            "title": "Al-Fil",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/105.mp3",
            "art": "images/105.jpg"
        },
        {
            "title": "Quraysh",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/106.mp3",
            "art": "images/106.jpg"
        },
        {
            "title": "Al-Ma'un",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/107.mp3",
            "art": "images/107.jpg"
        },
        {
            "title": "Al-Kawthar",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/108.mp3",
            "art": "images/108.jpg"
        },
        {
            "title": "Al-Kafirun",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/109.mp3",
            "art": "images/109.jpg"
        },
        {
            "title": "An-Nasr",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/110.mp3",
            "art": "images/110.jpg"
        },
        {
            "title": "Al-Masad",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/111.mp3",
            "art": "images/111.jpg"
        },
        {
            "title": "Al-Ikhlas",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/112.mp3",
            "art": "images/112.jpg"
        },
        {
            "title": "Al-Falaq",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/113.mp3",
            "art": "images/113.jpg"
        },
        {
            "title": "An-Nas",
            "artist": "AbdulBaset AbdulSamad",
            "album": "The Holy Quran",
            "url": "audio/114.mp3",
            "art": "images/114.jpg"
        }
    ];


    // Intro animation and player reveal
    startBtn.addEventListener('click', () => {
        logo.classList.add('moved');
        introContainer.classList.add('hidden');
        playerContainer.classList.add('active');
        loadAndPlay(0);
    });

    // Render playlist
    function renderPlaylist() {
        playlistEl.innerHTML = '';
        playlist.forEach((track, index) => {
            const li = document.createElement('li');
            li.className = index === currentTrackIndex ? 'active' : '';
            li.innerHTML = `
                <div class="song-info">
                    <span class="song-title">${track.title} - </span>
                    <span class="song-artist">${track.artist}</span>
                </div>
                <span class="song-duration">--:--</span>
            `;
            li.addEventListener('click', () => loadAndPlay(index));
            playlistEl.appendChild(li);
        });
    }

    // Load track
    function loadTrack(index) {
        currentTrackIndex = (index < 0) ? playlist.length - 1 : (index >= playlist.length) ? 0 : index;
        const track = playlist[currentTrackIndex];

        audioPlayer.src = track.url;
        trackTitle.textContent = 'Loading...';
        albumName.textContent = `${track.artist} - ${track.album}`;
        albumArt.src = track.art;

        document.querySelectorAll('.playlist li').forEach((item, i) => {
            item.className = i === currentTrackIndex ? 'active' : '';
        });

        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }

    // Play track
    function playTrack() {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            document.querySelector('.music-card').classList.add('is-playing');
        }).catch(err => console.error('Play error:', err));
    }

    // Pause track
    function pauseTrack() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        document.querySelector('.music-card').classList.remove('is-playing');
    }

    // Load and play
    function loadAndPlay(index) {
        loadTrack(index);
        playTrack();
    }

    // Format time
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Event Listeners
    playPauseBtn.addEventListener('click', () => isPlaying ? pauseTrack() : playTrack());
    prevBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex - 1));
    nextBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex + 1));

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        audioPlayer.volume = volume;
        volumeIcon.className = `fas ${volume > 0.5 ? 'fa-volume-up' : volume > 0 ? 'fa-volume-down' : 'fa-volume-mute'}`;
    });

    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        if (!isNaN(duration)) {
            progress.style.width = `${(currentTime / duration) * 100}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            totalTimeEl.textContent = formatTime(duration);
        }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        trackTitle.textContent = playlist[currentTrackIndex].title;
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('ended', () => loadAndPlay(currentTrackIndex + 1));
    audioPlayer.addEventListener('error', () => {
        console.error('Audio error:', audioPlayer.error.message);
        trackTitle.textContent = 'Error loading track';
    });

    // Initialize
    renderPlaylist();
});