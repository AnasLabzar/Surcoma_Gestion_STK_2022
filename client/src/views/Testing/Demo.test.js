import { render, screen, cleanup } from '@testing-library/react';
import Login from '../examples/Login';

test('should render login compenent', async () => {
    rener(<Login />);
    const loginElement = screen.getByTestId('login-1')
    expect(loginElement).toBeInTheDocument(true);
})

test('should render login compenent', async () => {
    rener(<Login />);
    const loginElement = screen.getByTestId('login-1')
    expect(loginElement).toBeInTheDocument(true);
})


test('should render login compenent', async () => {
    rener(<Login />);
    const loginElement = screen.getByTestId('login-1')
    expect(loginElement).toBeInTheDocument(true);
})