const fs = require('fs');
const es = require('express');
let path = require('path');
const app = es();
let resultArray = [];
let resultHTML = '';

app.listen(3000);

app.get('/mydir', (req, res) => {
    fs.opendir('task', async(err, dir) => {
        if (err)
            throw err;
        resultHTML = '';
        for await (const dirent of dir) {
            let ext = path.extname(dirent.name);
            if (ext == '.mp4' || ext == '.wmv' || ext == '.flv') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play-circle" class="svg-inline--fa fa-play-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg> 
                    <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`;
            } else if (ext == '.mp3' || ext == '.wav') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="music" class="svg-inline--fa fa-music fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"></path></svg>
                    <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`;
            } else if (ext == '') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" class="svg-inline--fa fa-folder fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>
                    <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`;
            } else if (ext == '.docx') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" -hidden="true" focusable="false" data-prefix="fas" data-icon="file-word" class="svg-inline--fa fa-file-word fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`;
            } else if (ext == '.txt') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sticky-note" class="svg-inline--fa fa-sticky-note fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"></path></svg>
                    <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`
            } else if (ext == '.jpg' || ext == '.png') {
                resultHTML += `<div style="display:inline-block;height:20px;overflow:hidden;width:20%;border:2px solid grey;border-radius:5px;margin:5px;padding:5px 7px;">
                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="image" class="svg-inline--fa fa-image fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"></path></svg>
                    <h3 style="display:inline;margin-left:5px;">${dirent.name}</h3>
                </div>`
            }
        }
    })
    res.send(resultHTML);

})