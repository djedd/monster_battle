import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  setBattleResult,
  setComputerMonster,
  setSelectedMonster,
} from '../../reducers/monsters/monsters.actions';
import './MonstersList.scss';
import { Card, Typography } from '@mui/material';

type MonstersListProps = {
  monsters: Monster[];
};

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
  const dispatch = useAppDispatch();

  const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(
    null,
  );

  const pickRandomMonster = (monster: Monster) => {
    const filteredMonsters = monsters.filter((m) => m.id !== monster.id);
    const randomIndex = Math.floor(Math.random() * filteredMonsters.length);
    return filteredMonsters[randomIndex];
  };

  const handleMonsterClick = (monster: Monster) => {
    const value = selectedMonsterId === monster.id ? null : monster.id;
    setSelectedMonsterId(value);
    dispatch(setSelectedMonster(!value ? null : monster));
    dispatch(setComputerMonster(pickRandomMonster(monster)));
    dispatch(setBattleResult(null));
  };

  return (
    <>
      <Typography className="list-title">
        {monsters.length > 0 ? 'Select your monster' : 'No monsters available'}
      </Typography>

      <section className="list-section" data-testid="monsters-list-section">
        {monsters.map((monster) => (
          <Card
            className={monster.id === selectedMonsterId ? 'list-card selected' : 'list-card'}
            key={monster.id}
            onClick={() => handleMonsterClick(monster)}
            data-testid={monster.id}>
            <img className="list-card-image" src={monster.imageUrl} alt="monster" />
            <Typography className="list-card-name">{monster.name}</Typography>
          </Card>
        ))}
      </section>
    </>
  );
};

export { MonstersList };
