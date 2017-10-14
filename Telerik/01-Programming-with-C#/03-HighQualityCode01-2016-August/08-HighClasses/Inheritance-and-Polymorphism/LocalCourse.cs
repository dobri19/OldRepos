using System.Collections.Generic;
using System.Text;

namespace InheritanceAndPolymorphism
{
    public class LocalCourse : Course
    {
        private string lab;

        public LocalCourse(string courseName, string teacherName, string lab)
            : base(courseName, teacherName)
        {
            this.Lab = lab;
        }

        public LocalCourse(string courseName, string teacherName, string lab, IList<string> students)
            : base(courseName, teacherName, students)
        {
            this.Lab = lab;
        }

        public string Lab
        {
            get
            {
                return this.lab;
            }

            set
            {
                Validator.CheckForNullOrEmpty(value, "lab");
                Validator.CheckStringLength(value, Constants.LabMaxLength, Constants.LabMinLength, "lab");

                this.lab = value;
            }
        }

        public override string ToString()
        {
            var result = new StringBuilder(base.ToString());
            result.Insert(0, "LocalCourse");
            result.Append($"Lab = {this.Lab} }}");
            return result.ToString();
        }
    }
}
