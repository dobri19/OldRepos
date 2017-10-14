using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Schoola
{
    public class Student
    {
        private string name;
        private int id;
        public Student(string name, int id)
        {
            this.Name = name;
            this.ID = id;
        }
        public string Name
        {
            get
            {
                return this.name;
            }
            private set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    this.name = value;
                }
                else
                {
                    throw new ArgumentNullException("value", "Name cannot be null or empty.");
                }
            }
        }
        public int ID
        {
            get
            {
                return this.id;
            }
            private set
            {
                if ((value >= 10000) && (value <= 99999))
                {
                    this.id = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("value", "Id must be between 10000 and 99999.");
                }
            }
        }
    }
}
