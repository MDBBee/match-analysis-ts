import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => row.split(','));
  }
}

// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];

//Creat the class structure for implementing the interface, to read, parse and store data into a [[],[]]
