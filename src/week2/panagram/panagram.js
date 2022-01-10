export const pangram = (sentence) => {
    const processedSentence = sentence.replace(' ', '').split('').map(i => i.toUpperCase());
    const isPangram = alphabet.every(elem => processedSentence.includes(elem));
    return isPangram ? 'pangram': 'not pangram';
}

const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ];
