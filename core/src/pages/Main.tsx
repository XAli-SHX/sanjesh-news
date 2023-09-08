import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "./Layout.tsx";
import {NewsList} from "./NewsList.tsx";
import {About} from "./About.tsx";
import {NotFound404} from "./NotFound404.tsx";

export function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<NewsList/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path="*" element={<NotFound404/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}