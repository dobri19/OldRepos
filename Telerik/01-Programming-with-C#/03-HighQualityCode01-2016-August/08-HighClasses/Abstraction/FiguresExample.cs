using System;

namespace Abstraction
{
    public class FiguresExample
    {
        public static void Main()
        {
            Circle circle = new Circle(5);
            string circleInfo = circle.ToString();
            Console.WriteLine(circleInfo);

            Rectangle rect = new Rectangle(7, 3);
            string rectInfo = rect.ToString();
            Console.WriteLine(rectInfo);
        }
    }
}
