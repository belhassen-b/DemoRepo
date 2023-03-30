

import express from 'express';
import {Data} from "./classes/data.js";


const data = new Data();

const app = express();

app.use(express.json());

app.get('/contacts', (req, res) => {
    res.json(data.contacts)
});

app.get('/contacts/:id', (req, res) => {
    const contact = data.getContacts(req.params.id);
    if(contact != undefined){
        res.json(contact);
    }else{
        res.json({message:" 'Contact not found' "});
    }
}
);

app.put('/contacts/:id', (req, res) => {
const {nom, prenom, telephone, email} = req.body;
if (data.updateContact(req.params.id, nom, prenom, telephone, email)){
    res.json({message: "Contact updated"});
}else{
    res.json({message: "Error updating contact"});
}
}
);

app.post('/contacts', (req, res) => {
    const {nom, prenom, telephone, email} = req.body;
    data.addContact(nom, prenom, telephone, email);
    res.json({message: "Contact added"});
});

app.delete('/contacts/:id', (req, res) => {
    if(data.deleteContact(req.params.id)){
        res.json({message: "Contact deleted"});
    }else{
        res.json({message: "Error deleting contact"});
    }
}
);

app.listen  (5000, function()
    {
        console.log('Sur le port 5000');
    }
)


