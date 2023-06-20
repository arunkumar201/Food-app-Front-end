import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client.ts";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./auth/AuthProvider.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<UserProvider>
			<BrowserRouter>
				<Provider store={store}>
					<ApolloProvider client={client}>
						<App />
					</ApolloProvider>
				</Provider>
			</BrowserRouter>
		</UserProvider>
	</>
);
