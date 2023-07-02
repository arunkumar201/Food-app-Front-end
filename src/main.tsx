import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client.ts";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./auth/AuthProvider.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { ThemeProvider } from "./provider/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		<UserProvider>
			<BrowserRouter>
			<ThemeProvider>
				<Provider store={store}>
					<ApolloProvider client={client}>
						<App />
					</ApolloProvider>
				</Provider>
			</ThemeProvider>
			</BrowserRouter>
		</UserProvider>
	</>
);
