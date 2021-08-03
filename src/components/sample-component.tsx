import {
  ForwardFn,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "preact/compat";

export interface SampleComponentProps {
  title?: string;
}

export interface SampleComponentApi {
  load(): Promise<string>;
}

const SampleComponentInt: ForwardFn<
  SampleComponentProps,
  SampleComponentApi
> = ({ title }, ref) => {
  const [loadedData, setLoadedData] = useState<string>("N/A");
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("title was changed");
  }, [title]);

  useImperativeHandle(ref, () => ({
    async load(): Promise<string> {
      const result = "data was loaded";
      setLoadedData(result);
      return result;
    },
  }));

  return (
    <div ref={myRef} style={{ border: "1px solid red" }}>
      <p style={{ background: "#f00" }}>I am a sample component!</p>
      <p>Loaded data: {loadedData}</p>
      <p>Title: {title}</p>
    </div>
  );
};

export const observedAttributes = ["title", "load"];
export const SampleComponent = forwardRef(SampleComponentInt);
