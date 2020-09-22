import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let dataArray: Array<Array<number>>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);

    dataArray = new Array<Array<number>>();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('findNeighbours() method', () => {
    it('should return 1 because actual cell is alive and it have 2 neighbours', () => {
      // Arrange
      dataArray[0] = [1, 0, 0];
      dataArray[1] = [1, 1, 0];
      dataArray[2] = [0, 0, 0];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(1);
    });

    it('should return 1 because actual cell is alive and it have 3 neighbours', () => {
      // Arrange
      dataArray[0] = [0, 0, 1];
      dataArray[1] = [1, 1, 0];
      dataArray[2] = [0, 0, 1];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(1);
    });

    it('should return 0 because actual cell is alive and it have more than 3 neighbours', () => {
      // Arrange
      dataArray[0] = [0, 1, 1];
      dataArray[1] = [1, 1, 0];
      dataArray[2] = [0, 0, 1];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(0);
    });

    it('should return 0 because actual cell is alive and it have less than 2 neighbours', () => {
      // Arrange
      dataArray[0] = [1, 0, 0];
      dataArray[1] = [0, 1, 0];
      dataArray[2] = [0, 0, 0];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(0);
    });

    it('should return 0 because actual cell is not alive and it have less than 3 neighbours', () => {
      // Arrange
      dataArray[0] = [1, 0, 0];
      dataArray[1] = [1, 0, 0];
      dataArray[2] = [0, 0, 0];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(0);
    });

    it('should return 0 because actual cell is not alive and it have more than 3 neighbours', () => {
      // Arrange
      dataArray[0] = [0, 1, 1];
      dataArray[1] = [1, 0, 0];
      dataArray[2] = [0, 0, 1];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(0);
    });

    it('should return 1 because actual cell is alive and it have exactly 3 neighbours', () => {
      // Arrange
      dataArray[0] = [0, 0, 1];
      dataArray[1] = [1, 0, 0];
      dataArray[2] = [0, 0, 1];
      // Act
      const result = AppService.findNeighbours(dataArray, 1, 1);

      // Assert
      expect(result).toEqual(1);
    });
  });
});
