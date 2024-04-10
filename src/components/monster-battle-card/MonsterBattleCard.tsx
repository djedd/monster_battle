import { Card, Divider, Typography } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterStats } from './monster-stats/MonsterStats';
import './MonsterBattleCard.scss';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <Card className="battle-card">
      {monster && (
        <img
          src={monster.imageUrl}
          className="battle-image"
          alt="monster img"
        />
      )}
      <Typography
        className={`battle-title ${!!monster ? 'battle-title--aligned' : ''}`}>
        {title!}
      </Typography>
      {monster && <Divider className="battle-divider" />}
      {monster && <MonsterStats monster={monster} />}
    </Card>
  );
};

export { MonsterBattleCard };
