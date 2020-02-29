import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipe from "./Recipe";

const data = {
    "id": 0,
    "title": "Pizza",
    "description": "Pizza is nice",
    "ingredients": ["tomato", "cheese"],
    "cooking_time": 30
};

it('renders Recipe with title', () => {
    const {getAllByText} = render(<Recipe getRecipe={() => data}/>);
    expect(getAllByText(/Pizza/i)[0]).toBeInTheDocument();
});

it('renders Recipe with description', () => {
    const {getByText} = render(<Recipe getRecipe={() => data}/>);
    expect(getByText(/Pizza is nice/i)).toBeInTheDocument();
});

it('renders Recipe with ingredients', () => {
    const {getByText} = render(<Recipe getRecipe={() => data}/>);
    expect(getByText(/tomato/i)).toBeInTheDocument();
    expect(getByText(/cheese/i)).toBeInTheDocument();
});

it('renders Recipe cooking time', () => {
    const {getByText} = render(<Recipe getRecipe={() => data}/>);
    expect(getByText(/Cooking time: 30 minutes/i)).toBeInTheDocument();
});