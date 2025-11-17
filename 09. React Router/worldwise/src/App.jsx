import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />}></Route>
                    <Route path="product" element={<Product />}></Route>
                    <Route path="pricing" element={<Pricing />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="app" element={<AppLayout />}>
                        <Route index element={<p>LIST</p>} />
                        <Route
                            path="cities"
                            element={<p>List of cities</p>}
                        ></Route>
                        <Route
                            path="countries"
                            element={<p>List of countries</p>}
                        ></Route>
                        <Route path="form" element={<p>Form</p>}></Route>
                    </Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
