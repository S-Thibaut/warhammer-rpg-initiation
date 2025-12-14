import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import App from "../../App";
import HomePage from "../Pages/HomePage";
import {Universe} from "../Pages/UniversePage";
import {Rules} from "../Pages/RulesPage";
import {Dangers} from "../Pages/DangersPage";



const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/articles/:id/Univers",
				element: <Universe />,
			},
			{
				path: "/articles/:id/Règles",
				element: <Rules/>,
			},
			{
				path: "/articles/:id/Dangers",
				element: <Dangers />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
