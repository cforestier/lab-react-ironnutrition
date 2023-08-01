import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState();
  const [image, setImage] = useState('');
  const [servings, setServings] = useState();

  const handleName = (e) => setName(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const resetForm = () => {
    setName('');
    setCalories('0');
    setImage('');
    setServings('0');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, image, servings };

    addFood(newFood);
    resetForm();
  };
  return (
    <div>
      <h2>Add some Food</h2>
      <form onSubmit={handleSubmit}>
        <label>name: </label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label>Image: </label>
        <input type="text" name="image" value={image} onChange={handleImage} />

        <label>Servings: </label>
        <input
          type="number"
          name="servings"
          checked={servings}
          onChange={handleServings}
        />

        <button type="submit">Add food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
