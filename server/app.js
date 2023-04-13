import express from 'express'
import commentHandler from './commentHandler.js'

const app = express();
app.use(express.json())

app.route('/comments')
    .post(commentHandler)
    .get(() => console.log("This is working!"))

export default app;