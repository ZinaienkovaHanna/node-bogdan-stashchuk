import express from 'express';
import morgan from 'morgan';

const app = express();

// logs info about request
app.use(morgan('tiny'));
// converts JSON to JS Object in POST, PUT, PATCH request
app.use(express.json());
// converts form data to JS Object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));

app.use((req, res) => {
    console.log(req.body);
    return res.send('This is express server');
});

app.listen(5000, () => console.log('Server is lintening at port 5000'));
