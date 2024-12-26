const express = require('express');
const cors = require('cors');
const connectDB = require('../backend/database');

const Database = require('../backend/model');
//const router = require('../BACKEND/Routes/routes')
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB();
app.get('/about',function (req,res){ 
 
  res.send("mongodb express  React and mongoose app ,React runs in another application") 
  data.countDocuments().exec() 
            .then(count=>{ 
   
                  console.log("Total documents Count before addition :", count)  
                  
    
            }) .catch(err => { 
              console.error(err) 
            }) 
       
  }) 
   
 
    app.get('/allbooks', async (req,res) => { 
        
        try{
           const Data =await Database.find({});
           res.status(200).json(Data);
        } catch (err){
          res.status(500).json({Message:error.Message});
        } 
      }
      );
      
   
  app.get('/getbook/:id',function(req, res) { 
          let id = req.params.id; 
          Database.findById(id, function(err, book) { 
              res.json(book); 
          }); 
      }); 
  app.post('/addbooks', function(req,res) 
      { 
          console.log("Ref",req.body) 
          let newbook = new Database(req.body); 
          console.log("newbook->",newbook) 
          newbook.save() 
              .then(todo => { 
                  res.status(200).json({'books': 'book added successfully'}); 
  }) 
  .catch(err => { 
      res.status(400).send('adding new book failed'); 
  }); 
}) 
app.post('/updatebook/:id',function(req, res) { 
let id = req.params.id; 
let updatedbook = new  Database(req.body); 
console.log("update id",id,"newbook>",updatedbook) 

Database.findByIdAndUpdate(id, 
{ 
  booktitle:updatedbook.booktitle, 
  PubYear:updatedbook.PubYear, 
  author:updatedbook.author, 
  Topic:updatedbook.Topic,  
  formate:updatedbook.formate 
} 
,  
function (err, docs) {  
if (err){  
console.log(err)  
}  
else{  
res.status(200).json({'books': 'book updated successfully'}); 
}  
}   ) 
     
}); 
 
app.post('/deleteBook/:id',function(req, res) { 
    let id = req.params.id; 
    
    console.log("deleting") 
    Database.findByIdAndDelete(id,function (err, docs) {  
                if (err){  
                        console.log(err)  
                        }  
                else{  
                        res.status(200).send('Book Deleted'); 
                    }  
        } 
         
         
        ) 
     
});     


app.listen(3000, () => {
    console.log('Server is running on port 3000');
  
  });