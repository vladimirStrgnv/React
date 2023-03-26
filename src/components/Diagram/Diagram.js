import DiagramBar from "./DiagramBar";
import './Diagram.css';

function Diagram(props) {
    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)
    const maxMathCosts = Math.max(...dataSetsValues);
    console.log(props.dataSets)
    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMathCosts}
                label={dataSet.label}
            >
            </DiagramBar>)}
        </div>
    )

};

export default Diagram;