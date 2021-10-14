import express from 'express';
import { calculator } from './calculator';

const app = express();

app.get('/ping', (_req, res) => {
    res.send('ping');
});

app.post('/calculate', (req, res) => {
    // These values are of type 'any' which are usually set implicitly if left alone
    // It's always better to explicitly give it the type of any and maybe add a comment for further info (setting noImplicitAny to true is a good rule)
    // The reason the compiler isn't complaining here is because req.body and stuff like req.query is explicitly typed to 'any'
    const {value1, value2, op} = req.body;

    const result = calculator(value1, value2, op);
    res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});