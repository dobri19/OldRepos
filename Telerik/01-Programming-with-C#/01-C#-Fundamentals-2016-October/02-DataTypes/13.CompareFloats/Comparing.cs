using System;

namespace CompareFloats
{
    public class Comparing
    {
        public static void Main()
        {
            double firstDouble = double.Parse(Console.ReadLine());
            double secondDouble = double.Parse(Console.ReadLine());
            const double Eps = 0.000001f;
            if (Math.Abs(firstDouble - secondDouble) < Eps)
            {
                Console.WriteLine("true");
            }
            else
            {
                Console.WriteLine("false");
            }
        }
    }
}
