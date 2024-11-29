import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

let manUnitedWins = 0;

const readerCSV = new CsvFileReader('football.csv');
const reader = new MatchReader(readerCSV);
reader.load();

for (let match of reader.matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
