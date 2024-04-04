import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, MonsterDivider, MonsterImage } from "./MonsterBattleCard.styled"
import { MonsterStats } from "./monster-stats/MonsterStats"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <BattleMonsterCard centralized>
            {monster && <MonsterImage src={monster.imageUrl}/>}
            <BattleMonsterTitle mustAlign={!!monster}>{title!}</BattleMonsterTitle>
            {monster && <MonsterDivider />}
            {monster && <MonsterStats monster={monster} />}
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }