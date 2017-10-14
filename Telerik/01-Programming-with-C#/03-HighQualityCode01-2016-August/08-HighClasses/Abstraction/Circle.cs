using System;

namespace Abstraction
{
    public class Circle : Figure
    {
        private double radius;

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public double Radius
        {
            get
            {
                return this.radius;
            }

            protected set
            {
                if (value <= 0)
                {
                    throw new ArgumentException("Radius must be greater than 0!");
                }

                this.radius = value;
            }
        }

        public override double CalcPerimeter()
        {
            double perimeter = 2 * Math.PI * this.Radius;
            return perimeter;
        }

        public override double CalcSurface()
        {
            double surface = Math.PI * this.Radius * this.Radius;
            return surface;
        }

        public override string ToString()
        {
            return string.Format("My perimeter is {0:f2}. My surface is {1:f2}.",
                this.CalcPerimeter(), this.CalcSurface());
        }
    }
}
