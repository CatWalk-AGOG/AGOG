const axios = require('axios')


export function fetchData(){
  return axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40347/styles',{headers: {Authorization:'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'}})
         
}

