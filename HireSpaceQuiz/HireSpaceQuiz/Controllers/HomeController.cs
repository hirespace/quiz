using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HireSpaceQuiz.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Question1()
        {
            return View("question1");
        }

        public ActionResult Question2()
        {
            return View("question2");
        }

        public ActionResult Question3()
        {
            return View("question3");
        }

        public ActionResult Question4()
        {
            return View("question4");
        }

        public ActionResult Question5()
        {
            return View("question5");
        }

        public ActionResult Scorecard()
        {
            return View("scorecard");
        }

        public ActionResult Leaderboard()
        {
            return View("leaderboard");
        }


    }
}