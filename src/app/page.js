"use client"
import Image from "next/image";
import Head from "next/head";
import HTMLEditor from "@/components/HTMLEditor";
import CSSEditor from "@/components/CSSEditor";
import JSEditor from "@/components/JSEditor";
import Output from "@/components/Output";
import { useState } from "react";

export default function Home() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  return (
    <>
      <div className="container mx-auto p-4">
        <Head>
          <title>CodePen Editor</title>
        </Head>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <HTMLEditor value={html} onChange={setHtml} />
          </div>
          <div className="col-span-1">
            <CSSEditor value={css} onChange={setCss} />
          </div>
          <div className="col-span-1">
            <JSEditor value={js} onChange={setJs} />
          </div>
        </div>

        <Output html={html} css={css} js={js} />
      </div>
    </>
  );
}
