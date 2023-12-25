const fs = require('fs');
const marked = require('marked');

// Read the content of your README.md file
const markdown = fs.readFileSync('README.md', 'utf8');

// Use marked to convert Markdown to HTML
const html = marked.parse(markdown);

// Create the HTML structure with a head tag and add a link to the stylesheet
const htmlWithStylesheet = `
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-CCC9N2HR5L"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-CCC9N2HR5L');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ჰაკერის მანიფესტი | The Hacker Manifesto</title>
  <style>
    body {
      max-width: 990px;
      padding: 15px !important;
      margin-inline: auto !important;
    }
    body > p:last-child {
      display: none !important;
    }
  </style>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.0/github-markdown-dark.css" integrity="sha512-QngYZiWDif1OjdGqaneXUjrCXGdv2bzecwqbFU2SvzlcHWuukimnIA2EtYHnZRow+3TzYgshlzCk+k9jPhXHMA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="markdown-body">
  ${html}
</body>
</html>
`;

// Write the updated HTML content to a new file (e.g., index.html)
fs.writeFileSync('index.html', htmlWithStylesheet);