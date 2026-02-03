import "./style.css";
import { Header } from "./Components/header";
import { Table } from "./Components/table";
import {DownloadMenu} from './Components/download'
import {Orbit} from './Components/orbit'





document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.id = "app";
  document.body.append(app);

  new Header("#header");
  new Orbit("#orbit");
  new Table("#table");
 
  new DownloadMenu("#download");
});
