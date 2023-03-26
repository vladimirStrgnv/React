import './Costs.css';
import Card from '../Ui/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';
import CostList from './CostList';
import CostDiagram from './CostDiagram';

function Costs(props) {
    const [selectedYear, setSelectedYear] = useState('2023');
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    };
    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    });
   

    return (
        <div>
            <Card className="costs"> 
                <CostsFilter onChangeYear = {yearChangeHandler} year = {selectedYear}></CostsFilter>
                <CostDiagram costs={filteredCosts}></CostDiagram>
                <CostList costs={filteredCosts}></CostList>
                
            </Card>  
            
        </div>
    );
}

export default Costs;