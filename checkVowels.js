const stringText = "Shivam";
const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
const checkVowels = (stringText, vowelsArray) => {
    let countOfVowels = 0;
    for (let index = 0; index < stringText.length; index++) {
        const element = stringText[index];
        vowelsArray.includes(element.toLowerCase()) && countOfVowels++;
    }
    return countOfVowels;
}

checkVowels(stringText, vowelsArray);