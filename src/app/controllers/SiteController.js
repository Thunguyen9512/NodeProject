/* NewsController.js */

class SiteController {
  // [GET] /home
  home(req, res) {
    res.render("home"); //render news view from "./views/news.handlebar"
  }

  // [GET] /search
  search(req, res) {
    res.render("search")
  }
  
}

module.exports = new SiteController();
