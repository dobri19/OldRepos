using System;

namespace Task02CreatePerson
{
    public class Start
    {
        public static void Main()
        {
            var femaleAge = 29;
            var maleAge = 30;
            var female = CreateNewPerson(femaleAge);
            var male = CreateNewPerson(maleAge);

            Console.WriteLine(female.Introduce());
            Console.WriteLine(male.Introduce());
        }

        public static Person CreateNewPerson(int personAge)
        {
            Person person = new Person();
            person.Age = personAge;

            if (person.Age % 2 == 0)
            {
                person.Name = "Big Boy";
                person.Gender = Gender.Male;
            }
            else
            {
                person.Name = "Hot Chick";
                person.Gender = Gender.Female;
            }

            return person;
        }
    }
}
