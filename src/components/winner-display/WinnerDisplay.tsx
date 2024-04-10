import { Typography } from "@mui/material";
import "./WinnerDisplay.scss"

type Props = {
    text: string;
}

const WinnerDisplay: React.FC<Props> = ({ text }) => (
    <div className="display-container">
        <Typography className="display-text">{text} wins!</Typography>
    </div>
)

export { WinnerDisplay }