import express from 'express';
import cors from 'cors'
import orderRouter from './routes/order.route.js';
import productRouter from './routes/products.route.js';
import bodyParser from 'body-parser';


const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser());


app.use('/api/v1',productRouter)
app.use('/api/v1',orderRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})