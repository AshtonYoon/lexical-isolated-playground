import dynamic from "next/dynamic";
import Image from "next/image";
// import Editor from "./Editor";
// import { EditorProvider } from "./EditorProvider";

const Editor = dynamic(() => import("./Editor").then((x) => x.default), {
  ssr: false,
});

const EditorProvider = dynamic(
  () => import("./EditorProvider").then((x) => x.EditorProvider),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </main>
  );
}
