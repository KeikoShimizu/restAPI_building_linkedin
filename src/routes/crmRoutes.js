import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')

        //nextはexpressのlibrary
        .get((req,res, next) => {
            //middleware（）expressのfunction. requestやresponceobkjectにアクセスして実際に動かす
            //この２つはterminalにprintされる
            console.log(`Request from : ${req.originalUrl}`)
            console.log(`Request from : ${req.method}`)
            next();
        }, getContacts)
      
    //Post endpoint
    .post(addNewContact);

    //single contact 
    app.route('/contact/:contactID')
        //get a specific contact
        .get(getContactWithID)
        //update specific contact
        .put(updateContact)    
        //delete specific contact
        .delete(deleteContact)    
    }

    export default routes;

    //indexで実際に使うRouteをここで設定して、export ＆index.jsでImport する