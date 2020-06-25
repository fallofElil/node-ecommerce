const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require('uuid');

const user = {
    id: uuidv4(),
    name: 'Anonymous'
};
