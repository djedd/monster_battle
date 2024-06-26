import { API_URL } from '../../constants/env';
import {
  Monster,
  MonsterBattleResult,
} from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getBattleResult = async ({
  monster1Id,
  monster2Id,
}: {
  monster1Id: string;
  monster2Id: string;
}): Promise<MonsterBattleResult> => {
  const response = await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({monster1Id, monster2Id}),
  });

  return response.json();
};

export const MonsterService = {
  getAll,
  getBattleResult,
};
