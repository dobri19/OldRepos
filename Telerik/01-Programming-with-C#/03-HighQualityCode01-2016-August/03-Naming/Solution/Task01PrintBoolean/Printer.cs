using System;

namespace Task01.PrintBoolean
{
    public class Printer : ILogger
    {
        public void BoolPrint(bool boolValue)
        {
            string boolAsString = boolValue.ToString();

            this.WriteLine(boolAsString);
        }

        public void WriteLine(string value)
        {
            Console.WriteLine(value);
        }
    }
}
