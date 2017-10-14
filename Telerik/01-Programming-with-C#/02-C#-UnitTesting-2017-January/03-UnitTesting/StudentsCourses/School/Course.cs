using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schoola
{
    public class Course
    {
        private string name;
        private List<Student> students;
        public Course(string name)
        {
            this.Name = name;
            List<Student> students = new List<Student>();
            this.Students = students;
        }
        public List<Student> Students { get; private set; }
        public void AddStudent(Student student)
        {
            if (student == null)
            {
                throw new ArgumentNullException("student", "Student parameter cannot be null.");
            }
            if (this.Students.Contains(student))
            {
                throw new Exception("The student has already enrolled in the course.");
            }
            if (this.Students.Count + 1 > 30)
            {
                throw new Exception("Course is full, student cannot join.");
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
                throw new Exception("The student hasn't enrolled in the course, therefore cannot leave it!");
            }

            this.Students.Remove(student);
        }
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
                    throw new ArgumentNullException("value", "Name cannot be null or empty.");
                }
                this.name = value;
            }
        }
    }
}
