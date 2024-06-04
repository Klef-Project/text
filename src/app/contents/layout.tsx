import { Info } from "@/components/info";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
        <article className="prose prose-xl">{children}</article>;
    </>)
  }