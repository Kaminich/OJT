import { Progress } from "antd";

const ProgressBar = ({ status, percent, style }) => {
    return (
        <Progress
            status={status}
            percent={percent}
            style={style}
        />
    )
}

export default ProgressBar;