import React, { ChangeEvent, useState } from "react";
import Field from "./components/Filed";
import Translate from "./components/Translate";
import Languages from "./components/Languages";

export default function App() {
  const [language, setLanguage] = useState<string>("uk");
  const [text, setText] = useState<string>("Hello, we are from Ukraine!");

  function onFieldChange(text: string): void {
    setText(text);
  }

  function onLanguageChange(lang: string): void {
    setLanguage(lang);
  }

  return (
    <div>
      <Field value={text} onChange={onFieldChange} />
      <Languages language={language} onLanguageChange={onLanguageChange} />
      <hr/>
      <Translate language={language} text={text} />
    </div>
  );
}
