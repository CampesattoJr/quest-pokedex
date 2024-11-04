import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pokedex } from './pokedex'
import { Pokemon } from './pokemon'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/pokedex" element={<Pokedex />} />
                <Route exact path="/pokemon/id:" element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    )
}