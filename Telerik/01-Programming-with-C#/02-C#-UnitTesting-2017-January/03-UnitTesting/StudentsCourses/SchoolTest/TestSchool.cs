using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using Schoola;

namespace SchoolTest
{
    [TestClass]
    public class TestSchool
    {
        private Course validCourse;
        private Student validStudent;
        private School validSchool;

        [TestInitialize]
        public void Init()
        {
            validCourse = new Course("Pirate Speech");
            validStudent = new Student("Captain Blackbeard", 15982);
            validSchool = new School("Too cool for sCOOL");
        }

        [TestMethod]
        public void SchoolShouldBeCreated()
        {
            var school = new School("Pirate Speech School");
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void SchoolWithInvalidNameShouldThrow()
        {
            var school = new School("");
        }

        [TestMethod]
        public void SchoolShouldAddStudentCorrectly()
        {
            validSchool.AddStudent(validStudent);
            Assert.IsTrue(validSchool.Students.Any(stud => stud.Name == validStudent.Name && stud.ID == validStudent.ID));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void SchoolAddingInvalidStudentShouldThrow()
        {
            Student student = null;
            validSchool.AddStudent(student);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void SchoolAddingAnAlreadyExistingStudentShouldThrow()
        {
            validSchool.AddStudent(validStudent);
            validSchool.AddStudent(validStudent);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void SchoolAddingAStudentWithAnIdThatIsAlreadyTakenShouldThrow()
        {
            validSchool.AddStudent(new Student("Cptn Nemo", 12111));
            validSchool.AddStudent(new Student("Cptn Jack", 12111));
        }

        [TestMethod]
        public void SchoolShouldRemoveStudentCorrectly()
        {
            validSchool.AddStudent(validStudent);
            validSchool.RemoveStudent(validStudent);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void SchoolRemovingAStudentWhoHasntJoinedTheSchoolShouldThrow()
        {
            validSchool.AddStudent(validStudent);
            validSchool.RemoveStudent(new Student("Captain Nemo", 12000));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void SchoolRemovingInvalidStudentShouldThrow()
        {
            Student student = null;

            validSchool.AddStudent(validStudent);
            validSchool.RemoveStudent(student);
        }

        [TestMethod]
        public void SchoolShouldAddCourseCorrectly()
        {
            validSchool.AddCourse(validCourse);
            Assert.IsTrue(validSchool.Courses.Any(course => course.Name == validCourse.Name));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void SchoolAddingInvalidCourseShouldThrow()
        {
            Course course = null;
            validSchool.AddCourse(course);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void SchooldAddingCourseThatHasAlreadyBeenAddedShouldThrow()
        {
            validSchool.AddCourse(validCourse);
            validSchool.AddCourse(validCourse);
        }

        [TestMethod]
        public void SchoolShouldRemoveCourseCorrectly()
        {
            validSchool.AddCourse(validCourse);
            Assert.IsTrue(validSchool.Courses.Count == 1);
            validSchool.RemoveCourse(validCourse);
            Assert.IsTrue(validSchool.Courses.Count == 0);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void SchoolRemovingInvalidCourseShouldThrow()
        {
            Course course = null;

            validSchool.AddCourse(validCourse);
            validSchool.RemoveCourse(course);
        }

        [TestMethod]
        [ExpectedException(typeof(Exception))]
        public void SchoolRemovingACourseThatHasntBeenAddedShouldThrow()
        {
            validSchool.RemoveCourse(validCourse);
        }
    }
}
