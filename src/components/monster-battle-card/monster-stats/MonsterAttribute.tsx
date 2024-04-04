import { Typography } from "@mui/material"
import { ProgressBar } from "../MonsterBattleCard.styled"

type MonsterAttributeProps = {
    attributeName?: string,
    value?: number,
}

const MonsterAttribute: React.FC<MonsterAttributeProps> = ({ attributeName, value }) => {
    return (
        <>
            <Typography>{attributeName}</Typography>
            <ProgressBar variant="determinate" value={value}/>
        </>
    )
}

export { MonsterAttribute }