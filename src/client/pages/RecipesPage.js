import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class RecipesPage extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRecipes() {
    return this.props.recipes.map((recipe, id) => {
      return (
        <div key={id} className='recipe-container gold-border'>
          <div className='ui-card inner-ui-card recipe-lg'>
            <div>
              <h1>{recipe.name}</h1>
              <h2>INGREDIENTS</h2>
              <div>
                {recipe.ingredients.split("&").map((ingredient, id) => {
                  if (
                    ingredient == "WET INGREDIENTS" ||
                    ingredient == "DRY INGREDIENTS"
                  ) {
                    return <h3 key={id}>{ingredient}</h3>;
                  } else {
                    return <p key={id}>{ingredient}</p>;
                  }
                })}
              </div>
            </div>
            <div className='bar'></div>
            <div>
              <h2>INSTRUCTIONS</h2>
              <div className='info-text'>
                {recipe.instructions.split("&").map((ingredient, id) => (
                  <p key={id}>{ingredient}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderRecipes()}</div>
      </div>
    );
  }
}

function mapStateToProps({ recipes, auth }) {
  return { recipes, auth };
}

export default {
  component: connect(mapStateToProps, { fetchRecipes })(
    requireAuth(RecipesPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchRecipes()),
};
