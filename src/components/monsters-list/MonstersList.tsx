import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { Monster } from "../../models/interfaces/monster.interface"
import { setBattleResult, setComputerMonster, setSelectedMonster } from "../../reducers/monsters/monsters.actions"
import { Image, ListTitle, MonsterCard, MonsterName, MonstersSection } from "./MonstersList.styled"

type MonstersListProps = {
    monsters: Monster[]
}

const MonstersList: React.FC<MonstersListProps> = ({ monsters }) => {
    const dispatch = useAppDispatch();

    const [selectedMonsterId, setSelectedMonsterId] = useState<string | null>(null);

    const pickRandomMonster = (monster: Monster) => {
        const filteredMonsters = monsters.filter(m => m.id !== monster.id);
        const randomIndex = Math.floor(Math.random()*filteredMonsters.length);
        return filteredMonsters[randomIndex];
    };

    const handleMonsterClick = (monster: Monster) => {
        const value = selectedMonsterId === monster.id ? null : monster.id
        setSelectedMonsterId(value)
        dispatch(setSelectedMonster(!value ? null : monster));
        dispatch(setComputerMonster(pickRandomMonster(monster)));
        dispatch(setBattleResult(null));
    };

    return (
        <div>
            <ListTitle>{monsters.length > 0 ? 'Select your monster': 'No monsters available'}</ListTitle>

            <MonstersSection data-testid="monsters-list-section">
                {monsters.map(monster => (
                    <MonsterCard key={monster.id} onClick={() => handleMonsterClick(monster)} selected={monster.id === selectedMonsterId} data-testid={monster.id}>
                        <Image src={monster.imageUrl} />
                        <MonsterName>
                            {monster.name}
                        </MonsterName>
                    </MonsterCard>
                ))}
            </MonstersSection>
        </div>
    )
}

export { MonstersList }