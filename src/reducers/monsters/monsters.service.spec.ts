import { MonsterService } from './monsters.service';
import monstersData from 'data/monsters.json';
import { MonsterBattleResult } from '../../models/interfaces/monster.interface';
import battleResult from '../../constants/tests/battleResult.json';


describe('Monsters Service', () => {
  it('should return the monsters list empty', async () => {
    jest.spyOn(MonsterService, 'getAll').mockResolvedValue([]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([]);
  });

  it('should return the monsters list with data', async () => {
    jest
      .spyOn(MonsterService, 'getAll')
      .mockResolvedValue([monstersData.monsters[0], monstersData.monsters[1]]);
    const response = await MonsterService.getAll();
    expect(response).toEqual([
      monstersData.monsters[0],
      monstersData.monsters[1],
    ]);
  });
  
  
  it('should return monster result data', async () => {
    jest
      .spyOn(MonsterService, 'getBattleResult')
      .mockResolvedValue(battleResult as MonsterBattleResult);
    const response = await MonsterService.getBattleResult({monster1Id: monstersData.monsters[0].id, monster2Id: monstersData.monsters[2].id});
    expect(response).toEqual(battleResult);
  });
});
