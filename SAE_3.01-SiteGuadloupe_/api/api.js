
const express = require('express');

app = express();

//PAGES
const genererPage = require('./pages/genererPage.js').genererPage

//port utilisee pour le serveur local
const PORT = process.env.PORT || 3000;

const PAGES = {
    '' : 'accueil',
}


app.get(/^\/(|actualites|foireAuxQuestions)$/, async(req, res)=>{
    const indexHTML = await genererPage(PAGES[req.params[0]] || req.params[0]);
    res.send(indexHTML);
})




app.use('/images', express.static('../images'))
app.use('/css', express.static('../css'))
app.use('/js', express.static('../js'))
app.use('/fonts',  express.static('../fonts'))


app.listen(PORT ,()=>{
    console.log(`connexion au port ${PORT} reussie !`);
    console.log("rendez vous sur la page : localhost:"+PORT);
});