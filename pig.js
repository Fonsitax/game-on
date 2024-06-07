const [node, test, ...input] = process.argv;

const vowels = ['A', 'E', 'I', 'O', 'U'];

const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X',
    'Y', 'Z'];


let translatetInput = [];

input.forEach(word => {

    const firstLetter = word.toUpperCase().charAt(0);
    const secondLetter = word.toUpperCase().charAt(1);

    if (consonants.includes(firstLetter) && vowels.includes(secondLetter)) {
        translatetInput.push(translateWordStartWithConsonantVowel(word));

    } else if (consonants.includes(firstLetter) && consonants.includes(secondLetter)) {
        translatetInput.push(translateWordStartWithTwoConsonant(word));

    } else if (vowels.includes(firstLetter)) {
        const translatedWord = translateWordStartWithVowel(word)
        translatetInput.push(translatedWord);

    }
    else {
        translatetInput.push(word);
    }
});

console.log(translatetInput);

function translateWordStartWithConsonantVowel(word) {
    // example: Word = Happy
    // appy
    const wordWithoutFirstLetter = word.substring(1);

    // h 
    const firstLetterLowerCase = word.toLowerCase().charAt(0);

    const ay = 'ay';

    // translated: appy h ay = appyhay
    const translatedWord = wordWithoutFirstLetter + firstLetterLowerCase + ay;

    return translatedWord;
}

function translateWordStartWithTwoConsonant(word) {
    // example: Word = Child

    // ild
    const wordWithoutSecondLetter = word.substring(2);

    const ay = 'ay';

    // ch
    const firstTwoLetters = word.substring(0, 2).toLowerCase();


    //  translated: ild ay ch = ildaych
    const translatedWord = wordWithoutSecondLetter + ay + firstTwoLetters;

    return translatedWord;
}

function translateWordStartWithVowel(word) {
    // example: Awesome

    const way = 'way';

    //  translated: Awesome way = Awesomeway
    const translatedWord = word + way;

    return translatedWord;
}
