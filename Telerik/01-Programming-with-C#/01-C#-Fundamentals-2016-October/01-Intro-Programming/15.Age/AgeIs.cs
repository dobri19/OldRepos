using System;
using System.Globalization;

namespace Age
{
    public class AgeIs
    {
        public static void Main(string[] args)
        {
            string birthDate = Console.ReadLine();
            DateTime birth = DateTime.ParseExact(birthDate, "MM.dd.yyyy", CultureInfo.InvariantCulture);

            DateTime today = DateTime.ParseExact("10.12.2016", "MM.dd.yyyy", CultureInfo.InvariantCulture);
            int age = today.Year - birth.Year;
            if (birth.AddYears(age) > today)
            {
                age--;
            }
            Console.WriteLine(age);
            Console.WriteLine(age + 10);
        }
    }
}
