'use strict'

const { resolve } = require('path');

/* eslint-env node, es6 */

const readFile = require('fs').readFile;
const join = require('path').join;


const readFileAsync = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if (err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const genererPage= async(NomDossier)=>{
    const URL_html = './../html';
    const [URL_modele,
                    URL_head,
                    URL_header,
                    URL_corp,
                    URL_footer,
                    URL_scripts] = [join(URL_html, 'modele.html'),
                                    join(URL_html, NomDossier, 'head.html'),
                                    join(URL_html, 'ressources', 'navBar.html'),
                                    join(URL_html, NomDossier, 'corp.html'),
                                    join(URL_html, 'ressources', 'footer.html'),
                                    join(URL_html, NomDossier, 'scripts.html')];

    const [modeleHTML,
            headHTML,
            headerHTML,
            corpHTML,
            footerHTML,
            scriptsHTML]= await Promise.all([readFileAsync(URL_modele),
                            readFileAsync(URL_head),
                            readFileAsync(URL_header),
                            readFileAsync(URL_corp),
                            readFileAsync(URL_footer),
                            readFileAsync(URL_scripts)]);
    const page =  modeleHTML.replace('{{HEAD}}', headHTML)
                 .replace('{{HEADER}}', headerHTML)
                  .replace('{{CORP}}', corpHTML)
                  .replace('{{FOOTER}}', footerHTML)
                   .replace('{{SCRIPTS}}', scriptsHTML);
    
    return(page)
    
}

module.exports.genererPage = genererPage;
