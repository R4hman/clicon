import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "./app/store.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  </BrowserRouter>
);

// colors: {
//   gray900: "#191C1F",
//   gray800: "#303639",
//   gray600: "#5F6C72",
//   gray500: "#77878F",
//   gray400: "#929FA5",
//   gray300: "#ADB7BC",
//   gray100: "#E4E7E9",
//   gray0: "#fff",
//   warning500: "#EBC80C",
//   warning300: "#f3de6d",
//   secondary700: "#1B6392",
//   secondary500: "#2DA5F3",
//   primary500: "#FA8232",
//   primary100: "#FFE7D6",
// },
// boxShadow: {
//   boxShadow: "0px 1px 0px 0px #303639",
// },
