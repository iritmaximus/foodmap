import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"

const App = () => {
  return (
    <div>
      <Typography variant="h4">Hello world!</Typography>
      <Typography variant="h2">Recipes:</Typography>
      <Recipes />
    </div>
  )
}

const Recipes = () => {
  const [recipes, setRecipes] = useState<string[]>([])

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch("api/recipes")
      const data = await response.json()
      setRecipes(data.recipes)
    }
    getRecipes()
  }, [])

  return (
    <>
      {recipes.map(recipe => {
        return (<Typography key={recipe}>{recipe}</Typography>)
      })}
    </>
  )
}

export default App
