[![Build Status](https://travis-ci.com/vtfk/company-info-api.svg?branch=master)](https://travis-ci.org/vtfk/company-info-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# Company info API

API for gathering info about our companies

## API


### ```GET /api```

Returns all companies if no filter is given
Filter is sent as body and filters based on property names.

Example:
```
{
  "type": "school",
  "address": {
    "city": "TØNSBERG"
  }
}

=> Returns all schools in tønsberg
```


## Environment variables
```
PAPERTRAIL_HOST=papertrail.example.com
PAPERTRAIL_PORT=5050
PAPERTRAIL_HOSTNAME=company-info-api
```


## License

[MIT](LICENSE)