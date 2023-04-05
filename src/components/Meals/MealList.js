
import DUMMY_MEALS from '../../mock/dummy-meals';
import styles from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const MealList = () => {
    const mealList = DUMMY_MEALS.map(meal => 
    <MealItem 
        key={Math.random()}
        name={meal.name} 
        description={meal.description}
        price={meal.price}
        id={meal.id}
    >
    </MealItem>);

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
}

export default MealList