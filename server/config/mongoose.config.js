const mongoose = require("mongoose"); 
//! rename dbName value on line below 
const dbName = "mern_52_product-manager-two-v3"
const mongoURI = `mongodb://localhost:27017/${dbName}`; 
mongoose
    .connect(mongoURI, 
        // line below merely stops deprecation alerts/errors from showing usePlaceholder. i.e. removes false alarms
        {useNewUrlParser: true, useUnifiedTopology: true}
        )
    .then(()=>{console.log(`Connected to ${dbName}`);
}) 
    .catch((err) => { console.log("Error in db connection", err); 
}); 
