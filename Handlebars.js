const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');