import "./style.css";
import { Header } from "./Components/header";
import { Table } from "./Components/table";
import {DownloadMenu} from './Components/download'
import {Orbit} from './Components/orbit'
import { Services } from "./Components/Services";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.id = "app";
  document.body.append(app);

  new Header("#header");
  new Orbit("#orbit");
  new Table("#table");
  new Services("#Services")
  new DownloadMenu("#download");
});
