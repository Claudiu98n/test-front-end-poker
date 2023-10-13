import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { paths } from './router/paths';
import { store } from './store/redux';
import StartGame from './components/StartGame/StartGame';
import Game from './components/Game/Game';
import { AppContainer } from './App.styles';

const router = createBrowserRouter([
    { path: paths.startGame, element: <StartGame /> },
    { path: paths.game, element: <Game /> },
]);

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <RouterProvider router={router} />
            </AppContainer>
        </Provider>
    );
}
