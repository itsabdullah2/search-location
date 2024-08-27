import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(<App />);
