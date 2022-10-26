import mongoose from 'mongoose'
import { ContactSchema } from "../models/crmModels"

//schemeで作った方をここにimportしてきて実際に入れる内容をDAtaをここで指定する！
const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact =(req, res) => {
    
    //body from the request と一緒にSchemaをここで新しいnewContactの中に入れる
    let newContact = new Contact(req.body);

    //data をDBにsaveする
    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        //errorがなければjOSNの中のcontact informationを一緒に
        res.json(contact)
    });
}

export const getContacts =(req, res) => {
    
    //
    Contact.find({}, (err, contact)=> {
        if(err) {
            res.send(err);
        }
        //errorがなければjOSNの中のcontact informationを一緒に
        res.json(contact)
    });
}

export const getContactWithID =(req, res) => {
    Contact.findById(req.prams.contactID, (err, contact)=> {
        if(err) {
            res.send(err);
        }
        //errorがなければjOSNの中のcontact informationを一緒に
        res.json(contact)
    });
}

export const updateContact =(req, res) => {
    //nowはMongoに新しいobjectをreturnさせてupdateさせる（trueの場合）
    //mongoに古いobjectをretuernさせてUpdateさせる（falseの場合）

    //{new: true, useFindAndModify: false }, これをsetしないとUpdateした後に、同じ内容で書き換えたものが二重に登録されてしまうので！
    //必ず入れること！
    Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, {new: true, useFindAndModify: false }, (err, contact)=> {
        if(err) {
            res.send(err);
        }
        //errorがなければjOSNの中のcontact informationを一緒に
        res.json(contact)
    });
}

export const deleteContact =(req, res) => {
    //nowはMongoに新しいobjectをreturnさせてupdateさせる（trueの場合）
    //mongoに古いobjectをretuernさせてUpdateさせる（falseの場合）

    //{new: true, useFindAndModify: false }, これをsetしないとUpdateした後に、同じ内容で書き換えたものが二重に登録されてしまうので！
    //必ず入れること！
    Contact.remove({_id: req.params.contactID},(err, contact)=> {
        if(err) {
            res.send(err);
        }
        //errorがなければjOSNの中のcontact informationを一緒に
        res.json({message: 'successfully delete contact!'})
    });
}