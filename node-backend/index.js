const axios = require('axios');
const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express()
app.use(cors());
let origin = '*'
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers',"Origin, X-Requested-With,Content-Type,Accept,Key,Access-Control-Allow-Headers,Cache-Control,Authorization")
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

app.get('/twitter/sustaindao', async (req,res) =>  {
    const options = {
        headers:{
            Authorization:`Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        }
    }
    try {
        const response = await axios.get("https://api.twitter.com/2/users/1504551646608728064?user.fields=name,username,profile_image_url", options)
        if(response){
            return res.json(response.data.data)
        }
    } catch(error){
        console.log(error)
    }
})


app.get('/tweets', async (req,res) =>  {
    const options = {
        headers:{
            Authorization:`Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
        }
    }
    try { 
        const response = await axios.get("https://api.twitter.com/2/users/1504551646608728064/tweets?max_results=5&tweet.fields=created_at,text,public_metrics", options)
        if(response){
            return res.json(response.data.data)
        }
    } catch(error){
        console.log(error)
    }

})
app.listen(4000)
