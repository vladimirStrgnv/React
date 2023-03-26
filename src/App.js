import React, { useState } from 'react';
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2023, 11, 17),
    description: 'Fridge',
    price: 999.99
  },
  {
    id: 'c2',
    date: new Date(2024, 11, 1),
    description: 'NoteBook',
    price: 99.99
  },
  {
    id: 'c3',
    date: new Date(2025, 7, 17),
    description: 'NotePad',
    price: 299.99
  }
]

function App() {
    const [costs, setCosts] = useState(INITIAL_COSTS)
   

    const addCostHandler = (cost) => {
      setCosts(prevCosts => {
        return [cost, ...prevCosts];
      });
    };

  return (
    <div>
        <NewCost onAddCost={addCostHandler}></NewCost>
        <Costs
          costs = {costs}
        ></Costs>
    </div>
  );
}

export default App;
