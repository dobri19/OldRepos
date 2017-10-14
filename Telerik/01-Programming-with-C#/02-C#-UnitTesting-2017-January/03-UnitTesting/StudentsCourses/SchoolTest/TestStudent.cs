using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Schoola;

namespace SchoolTest
{
    [TestClass]
    public class TestStudent
    {
        [TestMethod]
        public void StudentShouldBeCreated()
        {
            var student = new Student("Captain Blackbeard", 55123);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void StudentWithInvalidNameShouldThrow()
        {
            var student = new Student("", 22222);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void StudentWithInvalidIdShouldThrow()
        {
            var student = new Student("Captain Blackbeard", 5617);
        }
    }
}
