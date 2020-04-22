// General libraries
const cors = require('cors');
const app = require('express')();
const bodyParser = require('body-parser');

const http = require('http');
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Emit a message to the browser
app.get('/get-data', (req, res) => {
    return res.json(
        {
            "form_inputs": [
                {
                    "label": "Person name",
                    "name": "person_name",
                    "type": "text",
                    "value": null,
                    "rules": "required|min:3|max:64",
                    "options": [],
                    "default_value": null,
                    "multiple": false,
                    "readonly": false,
                    "placeholder": "Person name",
                    "info": "Example value of how to fill the input"
                },
                {
                    "label": "Country",
                    "name": "country",
                    "type": "select",
                    "value": null,
                    "rules": "required|min:2|max:64",
                    "options": [{"label": "Albania", "value": "albania"}, {"label": "Italy", "value": "italy"}],
                    "default_value": "albania",
                    "multiple": false,
                    "readonly": false,
                    "placeholder": "select",
                    "info": "Example value of how to fill the input"
                },
                {
                    "label": "Number",
                    "name": "country_1",
                    "type": "number",
                    "value": null,
                    "rules": "required|min:2|max:64",
                    "options": [{"label": "Albania", "value": "albania"}, {"label": "Italy", "value": "italy"}],
                    "default_value": "albania",
                    "multiple": false,
                    "readonly": false,
                    "placeholder": "select",
                    "info": "Example value of how to fill the input"
                },
                {
                    "label": "Textarea",
                    "name": "country_2",
                    "type": "textarea",
                    "value": null,
                    "rules": "required|min:2|max:64",
                    "options": [{"label": "Albania", "value": "albania"}, {"label": "Italy", "value": "italy"}],
                    "default_value": "albania",
                    "multiple": false,
                    "readonly": false,
                    "placeholder": "select",
                    "info": "Example value of how to fill the input"
                },
                {
                    "label": "Country",
                    "name": "country_3",
                    "type": "select",
                    "value": ["albania"],
                    "rules": "required",
                    "options": [{"label": "Albania", "value": "albania"}, {"label": "Italy", "value": "italy"}],
                    "default_value": ["albania"],
                    "multiple": true,
                    "readonly": false,
                    "placeholder": "select",
                    "info": "Example value of how to fill the input"
                },
            ]
        }
    );
})

//Emit a deleted message to the browser
app.post('/post-data', (req, res) => {
    return res.json({
        error: false
    });
});


server.listen(1337, () => {
    console.log("listening on port 1337");
});