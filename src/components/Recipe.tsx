type RecipeProps = {
  mealData: {
    id: string;
    name: string;
    instructions: string;
    img: string;
    source: string;
    area: string;
    category: string;
  };
};
const Recipe = ({
  mealData: { id, name, instructions, img, source, area, category },
}: RecipeProps) => {
  return (
    <>
      {id && (
        <div>
          <h2>{name}</h2>
          <p>
            エリア<span>{area}</span>
          </p>
          <p>
            カテゴリー<span>{category}</span>
          </p>
          <img src={img} alt="meal-image" />
          <p>{instructions}</p>
          <p>
            ソース
            <span>
              <a href={source}>{source}</a>
            </span>
          </p>
        </div>
      )}
    </>
  );
};
export default Recipe;
