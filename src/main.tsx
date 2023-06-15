import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client.ts";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./auth/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
	<UserProvider>
		<BrowserRouter>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</UserProvider>
	</>
);
