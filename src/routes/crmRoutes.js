const routes = (app) => {
    app.route('/contact')

        //nextはexpressのlibrary
        .get((req,res, next) => {
            //middleware
            //この２つはterminalにprintされる
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();
        }, (req, res, next) => {  
            //これはfrontに表示される 
            res.send('GET request successful!')
        })
      

    .post((req, res) =>
        res.send('POST request successfil!'))

       //single contact 
    app.route('/contact/:contactID')
        .put((req,res) =>
        res.send('PUT request successful!'))    

        .delete((req,res) =>
        res.send('DELETE request successful!'))    
    }

    export default routes;

    //indexで実際に使うRouteをここで設定して、export ＆index.jsでImport する