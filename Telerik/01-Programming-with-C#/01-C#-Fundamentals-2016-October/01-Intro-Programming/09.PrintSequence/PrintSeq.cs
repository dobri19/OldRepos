using System;

namespace PrintSequence
{
    public class PrintSeq
    {
        public static void Main(string[] args)
        {
            int count = 10;
            int start = 2;
            for (int i = 0; i < count; i++)
            {
                if (start > 0)
                {
                    Console.WriteLine(start);
                    start = - (start + 1);
                }
                else
                {
                    Console.WriteLine(start);
                    start = -(start - 1);
                }
            }
        }
    }
}
