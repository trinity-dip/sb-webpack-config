import { render } from "react-dom";
import App from "./components/App";
import "../node_modules/popper.js";
import "../node_modules/bootstrap";


require("bootstrap");
render(<App />, document.getElementById("root"));

