import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AddNewItem from './AddNewItem';

describe('AddNewItem component', () => {    
    test('renders the form for creating a new task', () => {
        render(<AddNewItem />);

        const FormElement = screen.getByRole('form');
        expect(FormElement).toBeInTheDocument();
    });

    test('renders the input field for creating a new task', () => {
        render(<AddNewItem />);

        const InputElement = screen.getByRole('textbox');
        expect(InputElement).toBeInTheDocument();        
    });

    test('renders the placeholder text "Add new todo" in the input field', () => {
        render( <AddNewItem />);

        const PlaceholderText = screen.getByPlaceholderText('Add new todo');
        expect(PlaceholderText).toBeInTheDocument();
    });
    
    test('renders the submit button', () => {
        render(<AddNewItem />);

        const SubmitButtonElement = screen.getByRole('button');
        expect(SubmitButtonElement).toBeInTheDocument();
    });

    test('renders "Submit" text on submit button', () => {
        render(<AddNewItem />);

        const SubmitText = screen.getByText('Submit', { exact: false });
        expect(SubmitText).toBeInTheDocument();
    
    });

});

