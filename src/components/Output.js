import React from 'react';

const Output = ({ html, css, js }) => {
  const iframeRef = React.useRef();

  React.useEffect(() => {
    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument;

    iframeDoc.open();
    iframeDoc.write(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `);
    iframeDoc.close();
  }, [html, css, js]);

  return <iframe title="output" ref={iframeRef} className="w-full h-64 border rounded-lg" />;
};

export default Output;