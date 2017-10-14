using System.Collections.Generic;
using System.Text;

namespace InheritanceAndPolymorphism
{
    public class OffsiteCourse : Course
    {
        private string town;

        public OffsiteCourse(string courseName, string teacherName, string town)
            : base(courseName, teacherName)
        {
            this.Town = town;
        }

        public OffsiteCourse(string courseName, string teacherName, string town, IList<string> students)
            : base(courseName, teacherName, students)
        {
            this.Town = town;
        }

        public string Town
        {
            get
            {
                return this.town;
            }

            set
            {
                Validator.CheckForNullOrEmpty(value, "town");
                Validator.CheckStringLength(value, Constants.TownMaxLength, Constants.TownMinLength, "town");

                this.town = value;
            }
        }

        public override string ToString()
        {
            var result = new StringBuilder(base.ToString());
            result.Insert(0, "OffSiteCourse");
            result.Append($"Town = {this.Town} }}");

            return result.ToString();
        }
    }
}
