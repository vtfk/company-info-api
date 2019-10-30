const { getCompanies } = require('@vtfk/company-info')

module.exports = async (req, res) => {
  let filter = {}
  if (req.body) {
    filter = JSON.parse(JSON.stringify(req.body))
  }

  const companies = getCompanies(filter)
  res.json(companies)
}
