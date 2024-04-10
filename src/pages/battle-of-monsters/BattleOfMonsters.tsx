import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import {
  fetchBattleResult,
  fetchMonstersData,
} from '../../reducers/monsters/monsters.actions';
import {
  selectBattleResult,
  selectComputerMonster,
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';
import './BattleOfMonsters.scss';
import { Button, Typography } from '@mui/material';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const computerMonster = useSelector(selectComputerMonster);
  const battleResult = useSelector(selectBattleResult);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    // Fight!
    if (selectedMonster && computerMonster) {
      dispatch(
        fetchBattleResult({
          monster1Id: selectedMonster.id,
          monster2Id: computerMonster.id,
        }),
      );
    }
  };

  return (
    <div className="page-container">
      <Typography className="page-title">Battle of Monsters</Typography>
      <MonstersList monsters={monsters} />
      {battleResult && <WinnerDisplay text={`${battleResult.winner.name}`} />}
      <section className="page-section">
        <MonsterBattleCard
          title={selectedMonster?.name || 'Player'}
          monster={selectedMonster}></MonsterBattleCard>
        <Button
          data-testid="start-battle-button"
          className="page-section-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </Button>
        <MonsterBattleCard
          title="Computer"
          monster={computerMonster}></MonsterBattleCard>
      </section>
    </div>
  );
};

export { BattleOfMonsters };
