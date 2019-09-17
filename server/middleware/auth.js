module.exports = function (req, res, next) {
  if (req.cookies) {
    try {
      const { actk } = JSON.parse(req.cookies.vuex)
      if (actk === '') {
        return res.redirect('/login')
      } else {
        next()
      }
    } catch {
      return res.redirect('/login')
    }
  } else {
    return res.redirect('/login')
  }
}
