# Server

Backend for the project.


## The game plan
### Routes
* /api/countries            -> all countries
* /api/countries            -> search a country (object in body?)

* /api/countries/<id>       -> specific country with id
* /api/countries/<id>/foods -> specific country's food
* /api/countries/<id>/foods/<id> -> specific country's specific food


* /api/users                -> all users
* /api/users/<id>           -> specific user
* /api/login                -> token if login successful (object in body)


### Country
Has at least these:
```typescript
interface Country {
    id: string;
    name: string;
    foods: Food[];
}
```

### Food
Has at least these:
```typescript
interface Food {
    id: string;
    name: string;
    country_id: string;
    description: string;
    recipe: string;
    ingredients: Ingredient[];
}
```

### User management
* User can login
* User can logout

* User can add foods to a country.
* User can edit their foods
* User can delete their foods
* User cannot delete other user's foods
