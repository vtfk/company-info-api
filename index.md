# Company info API
[GitHub](https://github.com/vtfk/company-info-api)

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

=> Returns all schools in Tønsberg
```
