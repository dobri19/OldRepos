using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrintTheTable
{
    class ASCI
    {
        static void Main(string[] args)
        {
            //Console.OutputEncoding = Encoding.UTF8;
            for (byte counter = 33; counter <= 126; counter++)
            {
                Console.Write((char)counter);
            }
        }
    }
}
