import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Recipe } from "./recipe"


@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Colunm()
  amount: string

  @Column()
  unit: string

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  recipe: Recipe
}
