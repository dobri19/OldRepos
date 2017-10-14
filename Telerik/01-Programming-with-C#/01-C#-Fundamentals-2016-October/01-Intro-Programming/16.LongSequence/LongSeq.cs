using System;

namespace LongSequence
{
    public class LongSeq
    {
        public static void Main(string[] args)
        {
            int count = 1000;
            int start = 2;
            for (int i = 0; i < count; i++)
            {
                if (start > 0)
                {
                    Console.WriteLine(start);
                    start = -(start + 1);
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
