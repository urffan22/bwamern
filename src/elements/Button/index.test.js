import React from 'react'
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from './index';

test("kalau button isDisabled, maka button tersebut gak bisa di click", () => {
    const {container} = render(<Button isDisabled></Button>)
    expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test("harus ada kalimat loading atau ada spinnernya", () => {
    const {container, getByText} = render(<Button isLoading></Button>);
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(container.querySelector('span')).toBeInTheDocument();
});

test("harus render <a> tag", () => {
    const {container} = render(<Button type="link" isExternal></Button>);    
    expect(container.querySelector('a')).toBeInTheDocument();
});

test("harus render <Link> component", () => {
    const {container} = render(
        <Router>
            <Button href="" type="link"></Button>
        </Router>
    );    
    expect(container.querySelector('a')).toBeInTheDocument();
});