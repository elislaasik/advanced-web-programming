import React, {Component} from 'react';
import './App.css';
import Recipes from "./Recipes";
import Recipe from "./Recipe";
import {Router, Link} from '@reach/router'
import PageNotFound from './PageNotFound';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
          recipeList: [
              {
                  title: 'Roast pepper & chorizo salad',
                  id: 1,
                  image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/chickpea-poached-egg.jpg?itok=8ZpRGZhv',
                  cookingTime: 'PREP: 15 MINS, COOK: 1 HR, 10 MINS',
                  ingredients: [{title:'pepper', amount: '8'}, {title:'olive oil', amount: '2 tbsp'}, {title: 'garlic', amount: '8 cloves'},{title: 'chorizo', amount:'225g'}, {title: 'smoked paprika', amount: '1 tsp'},
                      {title:'chickpeas', amount: '2x400g cans'}, {title:'sherry vinegar', amount:'2 tbsp'},{title: 'eggs', amount:'4'}, {title:'rocket', amount:'large handful'}
                  ],
                  instructions: ['1. Heat oven to 200C/180C fan/gas 6. Rub the peppers with 1 tbsp of the oil, then roast in the oven with the 6 unpeeled garlic cloves for 40-45 mins until soft. Put the peppers in a bowl, cover with cling film and leave to steam for 10 mins until cool enough to handle. Remove the stalks and seeds from the peppers, peel and discard the skin.',
                      '2. Put 4 peppers and the garlic in a container and chill for tomorrow’s dinner (if you have different coloured peppers, then keep 4 red ones for tomorrow), and tear the remaining peppers into chunks.',
                      '3. Heat the remaining oil in a frying pan. Fry the chorizo for a couple of mins until the oils start to leak into the pan. Stir in the sliced garlic and the paprika, cook for 1 min, then add the chickpeas and cook for a further 3-4 mins. Splash in the vinegar and add the torn peppers. Remove from the heat and season.',
                      '4. Poach the eggs. Toss the rocket with the chickpea mix and divide between 4 plates. Top each with a poached egg and serve with crusty bread, if you like.']
              },
              {
                  title: 'Garlicky mushroom penne',
                  id: 2,
                  image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/09/garlicky-mushroom-penne.jpg?itok=W03Fya-s',
                  cookingTime: 'PREP: 20 MINS, COOK: 15 MINS',
                  ingredients: [{ title:'chickpeas', amount:'210g can'},{ title:'lemon juice', amount:'1 tbsp'}, {title:'garlic' , amount: '1 clove'},{title: 'vegetable bullion', amount: '1tsp'},{title:'tahini', amount:'2 tsp'},
                     {title:'ground coriander', amount:'¼ tsp' }, {title:'pasta', amount:'115g'}, {title:'rapseed oil', amount: '2 tsp'}, {title: 'red onions', amount:'2'},
                      {title: 'mushrooms', amount: '200g'}, {title: 'parsley', amount:'generous handful'}],
                  instructions: ['1. To make the hummus, tip a 210g can chickpeas with the liquid into a bowl and add 1 tbsp lemon juice, 1 large garlic clove, 1 tsp vegetable bouillon, 2 tsp tahini and ¼ tsp ground coriander.',
                      '2. Blitz to a wet paste with a hand blender, still retaining some texture from the chickpeas.',
                      '3. Cook 115g wholemeal penne pasta according to the pack instructions.',
                      '4. Meanwhile heat 2 tsp rapeseed oil in a non-stick wok or large frying pan and add 2 halved and sliced red onions and 200g roughly chopped closed cup mushrooms stirring frequently until softened and starting to caramelise.',
                      '5. Toss together lightly squeeze over the juice of ½ a lemon and serve, adding a dash of water to loosen the mixture a little if needed. Scatter with a generous handful of chopped parsley.']
              },
              {
                  title: 'Mexican penne with avocado',
                  id: 3,
                  image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/mexican-penne.jpg?itok=Me76nQgF',
                  cookingTime: 'PREP: 10 MINS, COOK: 20 MINS',
                  ingredients: [{title: 'pasta', amount:'100g'},{title: 'rapeseed oil', amount:'1 tsp'}, {title: 'onion',amount:'1 large'}, {title: 'pepper', amount:'1'}, {title:'garlic', amount:'2 cloves'},
                      {title:'chilli powder', amount:'2 tsp'}, {title: 'ground coriander', amount: '1 tsp'}, {title:'cumin seeds', amount: '½ tsp'}, {title: 'chopped tomatoes', amount:'400g can'}, {title:'sweetcorn', amount: '196g can'},
                      {title: 'bouillon powder', amount: '1tsp'}, {title: 'avocado', amount:'1'}, {title: 'lime', amount:'½ juice and zest' }, {title: 'coriander', amount: ' handful'}],
                  instructions: ['1. Cook the pasta in salted water for 10-12 mins until al dente. Meanwhile, heat the oil in a medium pan. Add the sliced onion and pepper and fry, stirring frequently for 10 mins until golden. Stir in the garlic and spices, then tip in the tomatoes, half a can of water, the corn and bouillon. Cover and simmer for 15 mins.',
                      '2. Meanwhile, toss the avocado with the lime juice and zest, and the finely chopped onion.',
                      '3. Drain the penne and toss into the sauce with the coriander. Spoon the pasta into bowls, top with the avocado and scatter over the coriander leaves.'
                  ]
              }]
      }
  }


    getRecipe(id){
        return this.state.recipeList.find(recipe => recipe.id === parseInt(id))
    }

    getNavigation(){
      return this.state.recipeList.map(recipe => {
          return <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="menuItem">{recipe.title}</Link>
      })
    }

    //get data from the value
    getInputValue(){
      const inputVal = document.getElementById('searchInput').value
       return console.log(inputVal)
    }

    //searchByIngredient
    // <NewRecipe path="/new" addRecipe={{title}} => this.addRecipe{{title}}</NewRecipe>

  render() {
    return (

        <div className="App">
            <div className="mainTitle">

                    <h1> Recipes to maybe make in the future </h1>

            </div>
            <header className="navigation">
                <nav><Link to="/" className="menuItem"> Home, where the kitchen is...</Link>{this.getNavigation()}  </nav>
            </header>

            <form>
                <label>
                   Search recipe by ingredients:
                    <input type="text" name="name" placeholder=" ingredient name" id="searchInput"/>
                </label>
                <input type="submit" value="Submit" onClick={this.getInputValue} className="button" />
            </form>


          <Router>
            <Recipes data={this.state.recipeList} path="/"/>
            
            <Recipes path="/with/:filter" data={this.state.recipeList}/>
            <Recipe path="/recipe/:id" getRecipe={(id) => this.getRecipe(id)}/>
            <PageNotFound default/>
          </Router>

        </div>
    );
  }
}

export default App;
