import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  static findNeighbours(
    arr: Array<Array<number>>,
    i: number,
    j: number
  ): 0 | 1 {
    let neighboursAliveCounter: number = 0;

    if (arr[i - 1] != undefined) {
      neighboursAliveCounter += arr[i - 1][j - 1] ? 1 : 0;
      neighboursAliveCounter += arr[i - 1][j] ? 1 : 0;
      neighboursAliveCounter += arr[i - 1][j + 1] ? 1 : 0;
    }
    neighboursAliveCounter += arr[i][j - 1] ? 1 : 0;
    neighboursAliveCounter += arr[i][j + 1] ? 1 : 0;
    if (arr[i + 1] != undefined) {
      neighboursAliveCounter += arr[i + 1][j - 1] ? 1 : 0;
      neighboursAliveCounter += arr[i + 1][j] ? 1 : 0;
      neighboursAliveCounter += arr[i + 1][j + 1] ? 1 : 0;
    }

    // if actual cell is alive
    if (arr[i][j] === 1) {
      return neighboursAliveCounter < 2 || neighboursAliveCounter > 3 ? 0 : 1;
    } else {
      return neighboursAliveCounter === 3 ? 1 : 0;
    }
  }
}
