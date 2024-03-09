const express = require("express");
const cors = require("cors");
const app = express();
const m = require("./mongodb");
const m1 = require("./mongodb1");
const m2 = require("./mongodb2");
const crypto = require("crypto");
const key = "adnan-tech-programming-computers";
const algo = "aes-256-cbc";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', async (req, res) => {
    try {
        const result = await m.findOne({ cemail: req.body.cemail });

        if (!result) {
            return res.status(400).json({ message: 'Email Not Registered!!' });
        } else {
            const password = req.body.psw; // Changed from req.body.password to req.body.psw

            var cipher = crypto.createCipher(algo, key);
            var encrypted = cipher.update(password, "utf-8", "hex") + cipher.final("hex");

            if (result.password === encrypted) {
                return res.status(200).json({ message: 'Login successfully!' });
            } else {
                return res.status(400).json({ message: 'Password Incorrect!!' });
            }
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
    


app.post('/get', async (req, res) => {
    try {
        const userEmail = req.body.email; // Get email from the request body
        const data = await m.find({ cemail: userEmail }); // Fetch data based on the email
        res.json(data);
    } catch (error) {
        res.json("error");
    }
});

app.post('/gettask', async (req, res) => {
    try {
        const userEmail1 = req.body.email; // Get email from the request body
        const data = await m1.find({ cemail: userEmail1 }); // Fetch data based on the email
        res.json(data);
    } catch (error) {
        res.json("error");
    }
});


app.post('/apply',async(req,res)=>{
    try {
        const { cemail, date1, startDate,endDate, reason} = req.body;

        const newUser = await m2.create({
            cemail,
            date1,
            startDate,
            endDate,
            reason
        });

        res.status(201).json({ message: 'Application send to admin!!!!'});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.listen(5485);