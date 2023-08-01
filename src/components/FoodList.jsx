import { useState } from 'react';
import { Button } from 'antd';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';

function FoodList() {
  const [foodData, setFoodData] = useState(foods);
  const [searchKey, setSearchKey] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodData, newFood];

    setFoodData(updatedFood);
  };

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  const deleteFood = (nameOfFoodToDelete) => {
    const foodDataFiltered = foodData.filter(
      (food) => food.name !== nameOfFoodToDelete
    );
    setFoodData(foodDataFiltered);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const foodFiltered = foodData.filter((food) =>
    food.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
  );

  return (
    <div>
      <label for="search">Search food:</label>
      <input type="search" id="search" name="q" onChange={handleSearch} />
      <br />
      <Button type="primary" onClick={toggleForm}>
        Hide
      </Button>

      {isFormVisible && <AddFoodForm addFood={addNewFood} />}
      {foodFiltered.length ? (
        foodFiltered.map((food, index) => (
          <div key={`${food.name} ${index}`}>
            <FoodBox {...food} deleteFood={deleteFood} />
          </div>
        ))
      ) : (
        <EmptyFoodList />
      )}
    </div>
  );
}

function EmptyFoodList() {
  return <div>Oops there is no food to display</div>;
}

export default FoodList;
