import { Monster } from "../../../models/interfaces/monster.interface"
import { MonsterAttribute } from "./MonsterAttribute"
import { MonsterStatsContainer } from "./MonsterStats.styled"

type MonsterStatsProps = {
    monster?: Monster | null
}

const MonsterStats: React.FC<MonsterStatsProps> = ({ monster }) => {
    return (
        <MonsterStatsContainer>
            <MonsterAttribute attributeName="HP" value={monster?.hp}/>
            <MonsterAttribute attributeName="Attack" value={monster?.attack}/>
            <MonsterAttribute attributeName="Defense" value={monster?.defense}/>
            <MonsterAttribute attributeName="Speed" value={monster?.speed}/>
        </MonsterStatsContainer>
    )
}

export { MonsterStats }