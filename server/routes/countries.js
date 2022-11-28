const express = require('express');
const router = express.Router();

const countries = [
	{
		name: {
			common: "France",
			official: "French Republic"
		},
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€"
			}
		},
		capital: ["Paris"],
		region: "Europe",
		languages: {
			fra: "French"
		}
	},
	{
		name: {
			common: "Spain",
			official: "Kingdom of Spain"
		},
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€"
			}
		},
		capital: ["Madrid"],
		region: "Europe",
		languages: {
			spa: "Spanish"
		}
	},
	{
		name: {
			common: "Germany",
			official: "Federal Republic of Germany"
		},
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€"
			}
		},
		capital: ["Berlin"],
		region: "Europe",
		languages: {
			deu: "German"
		}
	},
	{
		name: {
			common: "Portugal",
			official: "Portuguese Republic"
		},
		currencies: {
			EUR: {
				name: "Euro",
				symbol: "€"
			}
		},
		capital: ["Lisbon"],
		region: "Europe",
		languages: {
			por: "Portuguese"
		}
	}
];

router.get('/', (req, res) => {
  return res.status(200).json(countries)
})

module.exports = router;