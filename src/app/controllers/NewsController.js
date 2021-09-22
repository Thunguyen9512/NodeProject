/* NewsController.js */

class NewsController {
  // [GET] / news
  index(req, res) {
    res.render("news"); //render news view from "./views/news.handlebar"
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('show detail')
  }
}

module.exports = new NewsController();
