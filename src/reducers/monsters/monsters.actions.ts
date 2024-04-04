import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster, MonsterBattleResult } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);

export const setBattleResult = createAction<null>(
  'monsters/setBattleResult',
);

export const fetchBattleResult = createAsyncThunk<MonsterBattleResult, {monster1Id: string, monster2Id: string}>(
  'monsters/fetchBattleResult',
  MonsterService.getBattleResult,
);
