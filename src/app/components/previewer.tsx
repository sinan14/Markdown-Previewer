export function Previewer({ parsedHtml }: { parsedHtml: string }) {
  console.log(parsedHtml[0]);
  return (
    <div id="preview_wrap" style={{ width: '70%', margin: '5rem auto 0' }}>
      <div className="toolbar">Previewer</div>

      <div id="preview" dangerouslySetInnerHTML={{ __html: parsedHtml }}></div>
    </div>
  );
}
