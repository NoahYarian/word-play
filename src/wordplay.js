import DICTIONARY from './dictionary';
// which words are other words in reverse?

const findRevs = (wordListJSON) => {
  let revs = [];
  for (let i = 0; i < wordListJSON.length; i++) {
    let rev = wordListJSON[i].word.split('').reverse().join('');
    if (wordListJSON.findIndex((entry) => entry.word === rev) !== -1 &&
        revs.findIndex((pair) => pair[0] === rev) === -1) {
      revs.push([wordListJSON[i].word, rev]);
    }
  }
  return revs;
}

// which words are two words in reverse? Three words in reverse?

const findRevHalfies = (longWords, halfLengthWords) => {
  let words = [];
  const halfLength = halfLengthWords[0].word.length;
  for (let i = 0; i < longWords.length; i++) {
      let rev = longWords[i].word.split('').reverse().join('');
      let firstWord = rev.slice(0,halfLength);
      let secondWord = rev.slice(halfLength);
      if (halfLengthWords.findIndex(entry => entry.word === firstWord) !== -1 &&
          halfLengthWords.findIndex(entry => entry.word === secondWord) !== -1) {
        words.push([longWords[i], firstWord, secondWord]);
      }
  }
  return words;
}

const findHalfies = (longWords, halfLengthWords) => {
  let words = [];
  const halfLength = halfLengthWords[0].word.length;
  for (let i = 0; i < longWords.length; i++) {
      let word = longWords[i].word;
      let firstWord = word.slice(0,halfLength);
      let secondWord = word.slice(halfLength);
      if (halfLengthWords.findIndex(entry => entry.word === firstWord) !== -1 &&
          halfLengthWords.findIndex(entry => entry.word === secondWord) !== -1) {
        words.push([longWords[i], firstWord, secondWord]);
      }
  }
  return words;
}

const findRevThirdies = (longWords, thirdLengthWords) => {
  let words = [];
  const thirdLength = thirdLengthWords[0].word.length;
  for (let i = 0; i < longWords.length; i++) {
      let rev = longWords[i].word.split('').reverse().join('')
      let firstWord = rev.slice(0,thirdLength);
      let secondWord = rev.slice(thirdLength, thirdLength*2);
      let thirdWord = rev.slice(thirdLength*2);
      if (thirdLengthWords.findIndex(entry => entry.word === firstWord) !== -1 &&
          thirdLengthWords.findIndex(entry => entry.word === secondWord) !== -1 &&
          thirdLengthWords.findIndex(entry => entry.word === thirdWord) !== -1) {
        words.push([longWords[i], firstWord, secondWord, thirdWord]);
      }
  }
  return words;
}

const findThirdies = (longWords, thirdLengthWords) => {
  let words = [];
  const thirdLength = thirdLengthWords[0].word.length;
  for (let i = 0; i < longWords.length; i++) {
      let word = longWords[i].word;
      let firstWord = word.slice(0,thirdLength);
      let secondWord = word.slice(thirdLength, thirdLength*2);
      let thirdWord = word.slice(thirdLength*2);
      if (thirdLengthWords.findIndex(entry => entry.word === firstWord) !== -1 &&
          thirdLengthWords.findIndex(entry => entry.word === secondWord) !== -1 &&
          thirdLengthWords.findIndex(entry => entry.word === thirdWord) !== -1) {
        words.push([longWords[i], firstWord, secondWord, thirdWord]);
      }
  }
  return words;
}

// how would I find all anagrams of a word?

const findAnagrams = (wordList) => {

  let sortedWords = {};
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i].word;
    let sortedLetters = word.split('').sort().join('');
    if (sortedWords[sortedLetters]) {
      sortedWords[sortedLetters].push(word);
    } else {
      sortedWords[sortedLetters] = [word];
    }
  }

  let anagrams = [];
  for (let sortedLetterSet in sortedWords) {
    if (sortedWords[sortedLetterSet].length > 1) {
      anagrams.push(sortedWords[sortedLetterSet]);
    }
  }
  return anagrams;
}

// which words have the most anagrams?

const findWordsWithMostAnagrams = () => {
  let mostAnagrams = 0;
  let winningAnagrams = [];
  for (let wordlist in DICTIONARY) {
    let anagrams = findAnagrams(DICTIONARY[wordlist]);
    for (let i = 0; i < anagrams.length; i++) {
      if (anagrams[i].length > mostAnagrams) mostAnagrams = anagrams[i].length;
      if (anagrams[i].length > 9) winningAnagrams.push(anagrams[i]);
    }
  }
  return winningAnagrams;
}

const getWaysOfRemovingOneLetterFromWord = (word) => {
  let ways = [];
  for (let i = 0; i < word.length; i++) {
    let str = word.split('');
    str.splice(i,1);
    ways.push(str.join(''));
  }
  return ways;
}
