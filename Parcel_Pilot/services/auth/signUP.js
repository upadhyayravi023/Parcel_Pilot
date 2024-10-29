// isko run karne se pehle apne system me node modules ko download kar lo     

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/pilotparcel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const userSchema = new mongoose.Schema({
  fullname: String,
  companyName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  amazon_id: { type: String, required: true },
  shopify_id: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { fullname, companyName, email, password, amazon_id, shopify_id } = req.body;

  try {
    const newUser = new User({
      fullname,
      companyName,
      email,
      password,
      amazon_id,
      shopify_id
    });

    await newUser.save();
    res.redirect('/login.html'); 
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Failed to sign up user', details: error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});