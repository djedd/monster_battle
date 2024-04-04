import { createReducer } from '@reduxjs/toolkit';
import { Monster, MonsterBattleResult } from '../../models/interfaces/monster.interface';
import { fetchBattleResult, fetchMonstersData, setBattleResult, setComputerMonster, setSelectedMonster } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  computerMonster: Monster | null;
  battleResult: MonsterBattleResult | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  computerMonster: null,
  battleResult: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setComputerMonster, (state, action) => ({
    ...state,
    computerMonster: action.payload,
  }));

  builder.addCase(setBattleResult, (state) => ({
    ...state,
    battleResult: null,
  }));


  builder.addCase(fetchBattleResult.pending, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.rejected, (state) => ({
    ...state,
    battleResult: null,
  }));

  builder.addCase(fetchBattleResult.fulfilled, (state, action) => ({
    ...state,
    battleResult: action.payload,
  }));
});
