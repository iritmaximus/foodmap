import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm"
import { Ingredient } from "./ingredient"

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  url!: string

  @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe)
  ingredients!: Ingredient[]
}
