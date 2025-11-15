import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="product" element={<Product />}></Route>
                    <Route path="pricing" element={<Pricing />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
