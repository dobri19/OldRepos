using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Schoola;
using System.Linq;

namespace SchoolTest
{
    [TestClass]
    public class TestCourse
    {
        [TestMethod]
        public void CourseShouldBeCreated()
        {
            var course = new Course("Intermediate Pirate Speech");
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void CourseWithInvalidNameShouldThrow()
        {
            var course = new Course("");
        }

        [TestMethod]
        public void CourseShouldAddStudentCorrectly()
        {
            var course = new Course("Intermediate Pirate Speech");
            var student = new Student("Captain Blackbeard", 55764);
            course.AddStudent(student);

            Assert.IsTrue(course.Students.Any(stud => stud.Name == student.Name && stud.ID == student.ID));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void CourseAddingInvalidStudentShouldThrow()
        {
            var course = new Course("Intermediate Pirate Speech");
            Student student = null;
            course.AddStudent(student);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void CourseAddingMoreThanThirtyStudentsShouldThrow()
        {
            var course = new Course("1337 sP33cH Course");
            for (int i = 0; i < 30; i++)
            {
                course.AddStudent(new Student(string.Format("Robot P" + i + "esho" + i), 13337 + i));
            }

            course.AddStudent(new Student("Cptn Nemo", 10001));
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void CourseAddingAnAlreadyExistingStudentShouldThrow()
        {
            var course = new Course("Just a course");
            var student = new Student("Captain Nemo", 12000);

            course.AddStudent(student);
            course.AddStudent(student);
        }

        [TestMethod]
        public void CourseShouldRemoveStudentCorrectly()
        {
            var course = new Course("course");
            var student = new Student("Captain Blackbeard", 10000);

            course.AddStudent(student);
            course.RemoveStudent(student);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void CourseRemovingAStudentWhoHasntEnrolledInTheCourseShouldThrow()
        {
            var course = new Course("course");
            var student = new Student("Captain Blackbeard", 10000);

            course.AddStudent(student);
            course.RemoveStudent(new Student("Captain Nemo", 12000));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void CourseRemovingInvalidStudentShouldThrow()
        {
            var course = new Course("course");
            Student student = null;

            course.AddStudent(new Student("Captain Nemo", 12000));
            course.RemoveStudent(student);
        }
    }
}
