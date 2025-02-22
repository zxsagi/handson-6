import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Carts from "./pages/Carts";
import Post from "./pages/Post";
import Product from "./pages/Product";
import Recipes from "./pages/Recipes";


function App() {
	const router = createBrowserRouter(createRoutesFromElements(
		<Route path="/" element={<RootLayout/>}>
			<Route index element={<Product/>}/>	
			<Route path="recipes" element={<Recipes/>}/>	
			<Route path="posts" element={<Post/>}/>	
			<Route path="carts" element={<Carts/>}/>	
		</Route>
	));
	return (
		<>
		<RouterProvider router={router}/>
		</>
	)
}

export default App
