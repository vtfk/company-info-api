const getCompanyInfo = require('@vtfk/company-info')

module.exports = async (req, res) => {
  let filter = {}
  if (req.body) {
    filter = JSON.parse(JSON.stringify(req.body))
  }

  const companies = getCompanyInfo(filter)
  res.json(companies)
}
