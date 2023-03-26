import './NewCost.css';
import CostForm from './CostForm';


function NewCost(props) {
    const saveCostDataHandler = (costData) => {
        const newCostData = {
            ...costData,
            id: Math.random().toString()
        }
        props.onAddCost(newCostData)        
    };

    return (
        <div className="new-cost">
            <CostForm onSaveCostData = {saveCostDataHandler}></CostForm>
        </div>
    )
}

export default NewCost;