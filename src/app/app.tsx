// eslint-disable-next-line @typescript-eslint/no-unused-vars
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { useState } from 'react';
import styles from './app.module.scss';
import { Editor } from './components/editor';
import { Previewer } from './components/previewer';
import { defaultText } from './helper';

export function App() {
  const [text, setText] = useState(defaultText);
  marked.setOptions({
    breaks: true,
  });
  const [parsedHtml, setParsedHtml] = useState(
    DOMPurify.sanitize(marked.parse(defaultText))
  );
  // useEffect(() => {
  //   setParsedHtml(DOMPurify.sanitize(marked.parse(defaultText)));
  // }, []);
  const changeMarkdownHandler = (text: string) => {
    setText(text);
    setParsedHtml(DOMPurify.sanitize(marked.parse(text)));
  };

  return (
    <div className={styles.container}>
      <Editor text={text} onChangeMarkdown={changeMarkdownHandler} />
      <Previewer parsedHtml={parsedHtml} />
    </div>
  );
}

export default App;
