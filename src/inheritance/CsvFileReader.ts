import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string) => row.split(','))
      .map(this.mapRow);
  }
}

// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];
