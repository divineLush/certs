import fetch from 'node-fetch'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const getCertList = async (token) => {
  const body = `{"size":10,"page":0,"filter":{"regDate":{"minDate":"","maxDate":""},"endDate":{"minDate":"","maxDate":""},"columnsSearch":[]},"columnsSort":[{"column":"date","sort":"DESC"}]}`

  const response = await fetch('https://pub.fsa.gov.ru/api/v1/rss/common/certificates/get', {
	  method: 'post',
	  body,
	  headers: {
	    'Content-Type': 'application/json',
	    'Origin': 'https://pub.fsa.gov.ru',
	    'Referer': 'https://pub.fsa.gov.ru/rss/certificate',
	    'Authorization': token
	  }
  })

  return await response.json()
}

const getCert = async (token, id) => {
  const response = await fetch(`https://pub.fsa.gov.ru/api/v1/rss/common/certificates/${id}`, {
	  method: 'get',
	  headers: {
	    'Content-Type': 'application/json',
	    'Origin': 'https://pub.fsa.gov.ru',
	    'Referer': `https://pub.fsa.gov.ru/rss/certificate/view/${id}/baseInfo`,
	    'Authorization': token
	  }
  })

  return await response.json()
}

const getDecList = async (token) => {
  const body = `{"size":10,"page":0,"filter":{"status":[],"idDeclType":[],"idCertObjectType":[],"idProductType":[],"idGroupRU":[],"idGroupEEU":[],"idTechReg":[],"idApplicantType":[],"regDate":{"minDate":null,"maxDate":null},"endDate":{"minDate":null,"maxDate":null},"columnsSearch":[{"name":"number","search":"","type":9}],"idProductOrigin":[],"idProductEEU":[],"idProductRU":[],"idDeclScheme":[],"awaitForApprove":null,"awaitOperatorCheck":null,"editApp":null,"violationSendDate":null,"isProtocolInvalid":null,"checkerAIResult":null,"checkerAIProtocolsResults":null,"checkerAIProtocolsMistakes":null,"hiddenFromOpen":null},"columnsSort":[{"column":"declDate","sort":"DESC"}]}`

  const response = await fetch('https://pub.fsa.gov.ru/api/v1/rds/common/declarations/get', {
	  method: 'post',
	  body,
	  headers: {
	    'Content-Type': 'application/json',
	    'Origin': 'https://pub.fsa.gov.ru',
	    'Referer': 'https://pub.fsa.gov.ru/rss/certificate',
	    'Authorization': token
	  }
  })

  return await response.json()
}

const getDec = async (token, id) => {
  const response = await fetch(`https://pub.fsa.gov.ru/api/v1/rds/common/declarations/${id}`, {
	  method: 'get',
	  headers: {
	    'Content-Type': 'application/json',
	    'Origin': 'https://pub.fsa.gov.ru',
	    'Referer': ` https://pub.fsa.gov.ru/rds/declaration/view/${id}/common`,
	    'Authorization': token
	  }
  })

  return await response.json()
}

const getToken = async () => {
  const response = await fetch('https://pub.fsa.gov.ru/login', {
	  method: 'post',
	  body: '{"username":"anonymous","password":"hrgesf7HDR67Bd"}',
	  headers: {
	    'Content-Type': 'application/json',
	    'Origin': 'https://pub.fsa.gov.ru',
	  }
  })

  return response[Object.getOwnPropertySymbols(response)[1]].headers.get('authorization')
}

const token = await getToken()
console.log(await getCertList(token))
// console.log(await getCert(token, '3297833'))
// console.log(await getDecList(token))
// console.log(await getDec(token, '17986879'))
