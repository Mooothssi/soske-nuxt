const axios = require('axios')
module.exports = async function (req, response, next) {
  if (req.cookies) {
    if (req.cookies.vuex) {
      const { actk } = JSON.parse(req.cookies.vuex)
      if (actk === '') {
        return response.redirect('/login')
      } try {
        const res = await axios.post('https://soske.silaalang.org/v1/auth/permit', {
          class: 'admin'
        }, { headers: { authorization: actk } })
        const { allowed } = res.data
        if (!allowed) {
          return response.redirect('/login')
        } else {
          next()
        }
      } catch (error) {
        console.log(error)
        return response.redirect('/')
      }
    } else {
      return response.redirect('/login')
    }
  } else {
    return response.redirect('/login')
  }
}
