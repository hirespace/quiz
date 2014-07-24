using System.Web;
using System.Web.Optimization;

namespace HireSpaceQuiz
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/main").Include(
                        "~/Scripts/jquery.js",
                        "~/Scripts/main.js"
                        ));

            bundles.Add(new StyleBundle("~/bundles/css").Include(
                     "~/Content/css/main.css"));
        }
    }
}
