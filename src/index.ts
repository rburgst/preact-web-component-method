import register from "preact-custom-element";
import {
  observedAttributes,
  SampleComponent,
} from "./components/sample-component";

register(SampleComponent, "sample-component", observedAttributes);
