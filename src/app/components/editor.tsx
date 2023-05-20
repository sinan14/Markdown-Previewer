export function Editor({
  text,
  onChangeMarkdown,
}: {
  text: string;
  onChangeMarkdown: (text: string) => void;
}) {
  const onchangeHandler = (event: any) => {
    onChangeMarkdown(event.target.value);
  };

  const textAreaStyle = {
    height: `300px`,
    width: '100%',
    backgroundColor: `#c0d8d8`,
    border: `1px solid #1d2f2f`,
    boxShadow: `1px 1px 10px 2px #3a5f5f`,
    borderTop: `none`,
  };
  return (
    <div id="editor_wrap" style={{ width: '70%', margin: '5rem auto 0' }}>
      <div className="toolbar">Editor</div>
      <textarea
        style={textAreaStyle}
        id="editor"
        name="editor"
        onChange={onchangeHandler}
        value={text}
      ></textarea>
    </div>
  );
}
