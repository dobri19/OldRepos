using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schoola
{
    public class School
    {
        private string name;
        public School(string name)
        {
            this.Name = name;
            this.Courses = new List<Course>();
            this.Students = new List<Student>();
        }
        public List<Student> Students { get; private set; }
        public List<Course> Courses { get; private set; }
        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentNullException();
                }
                this.name = value;
            }
        }
        public void AddStudent(Student student)
        {
            if (student == null)
            {
                throw new ArgumentNullException("student", "Student parameter cannot be null.");
            }
            if (this.Students.Contains(student))
            {
                throw new Exception("The student is already in the school.");
            }
            if (!HasUniqueId(student))
            {
                throw new ArgumentException("Student with the same ID is already present in the School.");
            }

            this.Students.Add(student);
        }

        public void RemoveStudent(Student student)
        {
            if (student == null)
            {
                throw new ArgumentNullException("student", "Student parameter cannot be null.");
            }
            if (!this.Students.Contains(student))
            {
                throw new Exception("The student is not in the school, therefore he cannot leave!");
            }

            this.Students.Remove(student);
        }

        public void AddCourse(Course course)
        {
            if (course == null)
            {
                throw new ArgumentNullException("course", "Course parameter cannot be null.");
            }
            if (this.Courses.Contains(course))
            {
                throw new Exception("The Course has already been added");
            }

            this.Courses.Add(course);
        }

        public void RemoveCourse(Course course)
        {
            if (course == null)
            {
                throw new ArgumentNullException("course", "Course parameter cannot be null.");
            }
            if (!this.Courses.Contains(course))
            {
                throw new Exception("There is no such course, therefore it cannot be removed!");
            }

            this.Courses.Remove(course);
        }

        private bool HasUniqueId(Student student)
        {
            return !(this.Students.Any(stud => stud.ID == student.ID));
        }
    }
}
