import CostItem from "./CostItem";
import './CostList.css';

function CostList (props) {
    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback" >В этом году расходов нет</h2>
    } else {
        return (
            <ul className="cost-list">
                {props.costs.map(cost => {
                return <CostItem 
                    key = {cost.id}
                    date = {cost.date}
                    price = {cost.price}
                    description = {cost.description}
                /> 
            })}
            </ul>
        )
    }
}

export default CostList;