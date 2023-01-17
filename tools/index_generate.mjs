await file_write(`public/index.html`,
`
<html>
    <head></head>
    <body>
        <script type="module" src="index.mjs"></script>
    </body>
</html>
`)

import fs from 'fs';

async function file_write(file_path, file_contents) {
    await fs.promises.writeFile(file_path, file_contents, 'utf8');
}