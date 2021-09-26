import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders greeting text', () =>{
    const {getByText}= render(<App/>);

    expect(getByText('Hi there!')).toBeInTheDocument()

});