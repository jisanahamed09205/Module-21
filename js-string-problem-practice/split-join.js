const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada';
const parts = lyrics.split(" ");
const sentense = lyrics.split(".");
const char = lyrics.split("");
// console.log(char);
const partal = lyrics.slice(5, 8);
console.log(partal);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

const lines = [
    'Tumi bondhu kala Pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kala sada sada'
  ];
const newSong = lines.join(':');
console.log(newSong);