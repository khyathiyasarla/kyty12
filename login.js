var exp=require('express');
var request=require("request");
var app=exp();
app.use(exp.static('public'));
  

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');
var serviceAccount = require("./kyty-3d84d-firebase-adminsdk-xh2yc-c3d6742dc4.json");
 
initializeApp({
    credential: cert(serviceAccount)
  });
  
const db = getFirestore();
  
app.get('/signup', function (req, res) {  
res.sendFile( __dirname + "/public/" + "signup.html" );

  
})  

  
app.get('/loginSubmit', function(req, res) {
    var a = req.query;
    var imail = a.email;
    var iassword =a.password;
    var dataPresent = false; // Flag to track data presence

    db.collection('12345').get().then((docs) => {
        docs.forEach((doc) => {
            if (imail == doc.data().Email && iassword == doc.data().Passwordad) {
                
                dataPresent = true;
            }
        });

        if (dataPresent) {
            res.send("data present in Firebase");
        } else {
            res.send("data not present in Firebase, please login");
        }
    });
});
  
app.get("/Signupsubmit",function(req,res){               
    var a=req.query;
    var name=a.userName;
    var email=a.email;
    var password=a.password;
    res.send("You Signed in Successfully with" + email);
    db.collection('12345').add({
        Name : userName,
        Email : email ,
        Password :password
    })
})
app.get("/login", function (req,res) {  
    res.sendFile( __dirname + "/public/" + "login.html" );
});
app.listen(3000);