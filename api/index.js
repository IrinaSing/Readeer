'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');

const routes = require('./routes');

// const app = express();
const router = express.Router();

// router.use(cors());
// router.use(bodyParser.json());

// router.use(
//   morgan('combined', {
//     stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
//       flags: 'a',
//     }),
//   })
// );

// if (config.MODE === 'development') {
//   router.use(morgan('dev'));
// }

router.get('/', (req, res) => {
  res.send('API! go to `/api`');
});

router.use('/api', routes);

// /* eslint-disable */
// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).end();
// });

// router.listen(config.PORT, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(
//       `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
//     );
//   }
// });

module.exports = router;
