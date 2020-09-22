import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  /**
   * Return 1 if next generation of the cell should live, otherwise return 0
   * @param arr Collection of actual cell
   * @param x Cell coordinate of the abscissa
   * @param y Cell coordinate of the ordinate
   */
  static findNeighbours(
    arr: Array<Array<number>>,
    x: number,
    y: number
  ): 0 | 1 {
    let neighboursAliveCounter: number = 0;

    if (arr[x - 1] != undefined) {
      neighboursAliveCounter += arr[x - 1][y - 1] ? 1 : 0;
      neighboursAliveCounter += arr[x - 1][y] ? 1 : 0;
      neighboursAliveCounter += arr[x - 1][y + 1] ? 1 : 0;
    }
    neighboursAliveCounter += arr[x][y - 1] ? 1 : 0;
    neighboursAliveCounter += arr[x][y + 1] ? 1 : 0;

    if (arr[x + 1] != undefined) {
      neighboursAliveCounter += arr[x + 1][y - 1] ? 1 : 0;
      neighboursAliveCounter += arr[x + 1][y] ? 1 : 0;
      neighboursAliveCounter += arr[x + 1][y + 1] ? 1 : 0;
    }

    // if actual cell is alive
    if (arr[x][y] === 1) {
      return neighboursAliveCounter < 2 || neighboursAliveCounter > 3 ? 0 : 1;
    } else {
      return neighboursAliveCounter === 3 ? 1 : 0;
    }
  }
}
