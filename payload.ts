import * as express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();
router.post('/',async (req:express.Request,res:express.Respnse,next:express.NextFunction):Promise<any>=>{
const data=(req.body && typeof req.body === 'string') ? JSON.parse(req.body) : req.body;
try{
if(data==='undefined'){
const msg = 'Invalid request: no content found on req.body';
return res.status(400).json({ message: msg });
}else{
res.status(200).send();
sendEmail(res.body);
    }
} catch(err){
next(err);
}
}
sendEmail(response)=>{
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using typescript',
  text: 'Payload call is successful'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports = {
path:'/payloadData',
router,
sendEmail
};
