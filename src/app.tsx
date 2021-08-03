import { Logo } from "./logo";
import { SampleComponentApi } from "./components/sample-component";
import { useCallback, useRef } from "preact/compat";

export function App() {
  const sampleComponentRef = useRef<SampleComponentApi>();

  const onLoad = useCallback(() => {
    sampleComponentRef.current?.load();
  }, []);
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>Sample Component Below</p>
      <sample-component ref={sampleComponentRef} id="sample1" title="test" />
      <div>
        <button onClick={onLoad}>Trigger Load</button>
      </div>
    </>
  );
}
