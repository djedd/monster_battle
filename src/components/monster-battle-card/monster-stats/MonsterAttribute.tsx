import { LinearProgress, Typography } from "@mui/material"
import './MonsterAttribute.scss';

type MonsterAttributeProps = {
    attributeName?: string,
    value?: number,
}

const MonsterAttribute: React.FC<MonsterAttributeProps> = ({ attributeName, value }) => {
    return (
        <>
            <Typography>{attributeName}</Typography>
            <LinearProgress variant="determinate" className="battle-progress-bar" value={value}/>
        </>
    )
}

export { MonsterAttribute }