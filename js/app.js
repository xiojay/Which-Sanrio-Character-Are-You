const sanrioCharacters = ['Hello Kitty', 'Kuromi', 'Keroppi', 'Badtz-Maru', 'The Obessesed Fan'];

const sanrioCharacterImages = {
    'Hello Kitty': {
        src: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_HK02_1200x1200_8e0362aa-6b38-4f53-9d87-227bc923075d_1024x1024.png?v=1667247735',
        alt: 'Pink background with "Hello Kitty" in bubble letters and a polaroid with a blue background and Hello Kitty putting up the peace sign'
    },
    'Kuromi': {
        src: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KU_1200x1200_1_1024x1024.png?v=1664470975',
        alt: 'Purple background with "Kuromi" in bubble letters and polaroid with yellow background and Kuromi putting up the peace sign'
    },
    'Keroppi': {
        src: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/01132022_soc_pinterestboardcoverupdate_KR_1200x1200_9daa3a2f-bca0-4c2b-a947-f1a4287b535a_480x480.png?v=1656536264',
        alt: 'Green background with "Keroppi" in bubble letters and a polaroid with purple background and Keroppi smiling'
    },
    'Badtz-Maru': {
        src: 'https://cdn.shopify.com/s/files/1/0416/8083/0620/files/XO_1200x1200_3523c527-b789-468c-8ece-93d5ac159440_480x480.png?v=1656354624',
        alt: 'Blue background with "Badtz-Maru" in bubble letters and polaroid of Badtz-Maru with a pink background.'
    },
    'The Obsessed Fan': {
        src: 'https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/maxresdefault_072.jpg',
        alt: 'From left to right: Chococat, Kuromi, Pompompurin, Hello Kitty, My Melody, Badtz-Maru, Pochacco, and Keropi. Cinnamoroll is above them screen left.'
    },
    'Not a Sanrio Character': {
        src: 'https://pbs.twimg.com/media/Ek_QOw8X0AAvKdG?format=jpg&name=4096x4096', 
        alt: 'Image showing fan-made anime chracter, red ombre background. Girl with long blonde hair and elf ears holding a sword'
    }
};

const answers = {
    favSeason: {
        'Summer': 'Hello Kitty',
        'Spring': 'Keroppi',
        'Winter': 'Badtz-Maru',
        'Fall': 'Kuromi',
        'Can\'t choose': 'The Obsessed Fan'    
    },
    favGenreOfMovies: {
        'Thriller': 'Kuromi',
        'Romance': 'Hello Kitty',
        'Action': 'Badtz-Maru',
        'Comedy': 'Keroppi',
        'Anime': 'The Obsessed Fan'   
    },
    favColor: {
        'Pink': 'Hello Kitty',
        'Blue': 'Badtz-Maru',
        'Purple': 'The Obsessed Fan',
        'Green': 'Keroppi',
        'Not Listed': 'The Obsessed Fan'
    },
    favHoliday: {
        'Valentine\'s Day': 'Keroppi',
        'Halloween': 'Kuromi',
        'Christmas': 'Hello Kitty',
        'April Fools Day': 'Badtz-Maru',
        'My Birthday': 'The Obsessed Fan' 
    },
    movieTheaterSnacks: {
        'Popcorn': 'Keroppi',
        'M&Ms': 'Hello Kitty',
        'Sour Patch Kids': 'Kuromi',
        'Nachos': 'Badtz-Maru',
        'No snacks, give me a drink': 'The Obsessed Fan'    
    }
};

const questions = [
    {
        text: 'What is your favorite season? 🌤',
        options: ['Summer', 'Winter', 'Fall', 'Spring', 'Can\'t choose']
    },
    {
        text: 'What is your favorite genre of movies? 🎬',
        options: ['Thriller', 'Romance', 'Action', 'Comedy', 'Anime']
    },
    {
        text: 'What is your favorite color? 🎨',
        options: ['Pink', 'Blue', 'Purple', 'Green', 'Not Listed']
    },
    {
        text: 'What is your favorite holiday? 🎊',
        options: ['Valentine\'s Day', 'Halloween', 'Christmas', 'April Fools Day', 'My Birthday']
    },
    {
        text: 'What type of snacks are you bringing into the movie theater?🍿',
        options: ['Popcorn', 'M&Ms', 'Sour Patch Kids', 'Nachos', 'No snacks, give me a drink']
    }
];

let characterScores = {
    'Hello Kitty': 0,
    'Kuromi': 0,
    'Keroppi': 0,
    'Badtz-Maru': 0,
    'The Obsessed Fan': 0
};

let currentQuestionIndex = 0
const chosenSanrioCharacter = 3

function showQuestion() {
    const question = questions[currentQuestionIndex]
    document.getElementById('text').innerText = question.text

    const optionsDiv = document.getElementById('options')
    optionsDiv.innerHTML = ''
    question.options.forEach(option => {
        const button = document.createElement('button')
        button.className = 'button option'
        button.innerText = option
        button.onclick = () => selectOption(button, option)
        optionsDiv.appendChild(button)
    });

    document.getElementById('quiz-section').classList.remove('hidden')
    document.getElementById('next-button').classList.add('hidden')
};

function getCharacterFromOption(option) {
    for (const [key, value] of Object.entries(answers)) {
        if (value[option]) {
            return value[option]
        }
    }
    return 'Not a Sanrio Character'
};


function selectOption(button, option) {
    const character = getCharacterFromOption(option)
    characterScores[character]++

    document.querySelectorAll('.option').forEach(btn => btn.classList.remove('selected-option'))
    button.classList.add('selected-option')
    document.getElementById('next-button').classList.remove('hidden')
};




function showResult() {
    let highestScore = 0
    let resultCharacter = 'Not a Sanrio Character' 
    let winCondition = false

    for (const [character, score] of Object.entries(characterScores)) {
        if (score > highestScore) {
            highestScore = score
            resultCharacter = character
        }
    };

    if (highestScore >= chosenSanrioCharacter) {
        winCondition = true;
        document.getElementById('result').innerText = `You are most similar to ${resultCharacter}!`
    } else {
        resultCharacter = 'Not a Sanrio Character'
        document.getElementById('result').innerText = 'None of the characters matched well. Try again!'
    };

    document.getElementById('result-image').src = sanrioCharacterImages[resultCharacter].src
    document.getElementById('result-image').alt = sanrioCharacterImages[resultCharacter].alt

    document.getElementById('result-section').classList.remove('hidden')
    document.getElementById('quiz-section').classList.add('hidden')
};

function startQuiz() {
    document.getElementById('intro').classList.add('hidden')
    showQuestion()
};

function restartQuiz() {
    characterScores = {
        'Hello Kitty': 0,
        'Kuromi': 0,
        'Keroppi': 0,
        'Badtz-Maru': 0,
        'The Obsessed Fan': 0
    };
    currentQuestionIndex = 0;
    document.getElementById('result-section').classList.add('hidden')
    document.getElementById('intro').classList.remove('hidden')
};

document.getElementById('start-button').onclick = startQuiz
document.getElementById('next-button').onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showResult()
    }
};
document.getElementById('restart-button').onclick = restartQuiz

