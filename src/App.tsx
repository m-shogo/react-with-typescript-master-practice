import { useState } from "react";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Recipe from "./components/Recipe";
import Loading from "./components/Loading";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [mealName, setMealName] = useState<string>("");
  const [mealData, setMealData] = useState({
    id: "",
    name: "",
    instructions: "",
    img: "",
    source: "",
    area: "",
    category: "",
  });
  const getMealData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
    );
    const jsonData = await response.json();
    const {
      idMeal,
      strMeal,
      strInstructions,
      strMealThumb,
      strYoutube,
      strArea,
      strCategory,
    } = jsonData.meals[0];
    setMealData({
      id: idMeal,
      name: strMeal,
      instructions: strInstructions,
      img: strMealThumb,
      source: strYoutube,
      area: strArea,
      category: strCategory,
    });
    setLoading(false);
  };
  return (
    <Layout>
      <h1>こんにちは</h1>
      <Form
        setMealName={setMealName}
        getMealData={getMealData}
        mealName={mealName}
      />
      {loading ? <Loading /> : <Recipe mealData={mealData} />}
    </Layout>
  );
};
export default App;
