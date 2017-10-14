using System;

namespace Methods
{
    public static class MathCalculations
    {
        public static double CalcTriangleArea(double a, double b, double c)
        {
            if (a <= 0 || b <= 0 || c <= 0)
            {
                throw new ArgumentException("Sides should be positive.");
            }
            else if (!AreValidSides(a, b, c))
            {
                throw new ArgumentException("Invalid triangle sides.");
            }
            else
            {
                double perimeter = CalcTrianglePerimeter(a, b, c);
                double area = Math.Sqrt((perimeter / 2) * ((perimeter / 2) - a) * ((perimeter / 2) - b) * ((perimeter / 2) - c));
                return area;
            }
        }

        public static int FindMax(params int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
            {
                throw new NullReferenceException("null elements");
            }

            int max = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] > max)
                {
                    max = numbers[i];
                }
            }

            return max;
        }

        public static double CalcDistance(double x1, double y1, double x2, double y2)
        {
            double distanceX = (x2 - x1) * (x2 - x1);
            double distanceY = (y2 - y1) * (y2 - y1);
            double distance = Math.Sqrt(distanceX + distanceY);

            return distance;
        }

        public static bool IsHorizontal(double firstPointY, double secondPointY)
        {
            return firstPointY == secondPointY;
        }

        public static bool IsVertical(double firstPointX, double secondPointX)
        {
            return firstPointX == secondPointX;
        }

        private static double CalcTrianglePerimeter(double a, double b, double c)
        {
            double perimeter = a + b + c;
            return perimeter;
        }

        private static bool AreValidSides(double firstSide, double secondSide, double thirdSide)
        {
            if (((firstSide + secondSide) > thirdSide) &&
                ((firstSide + thirdSide) > secondSide) &&
                ((secondSide + thirdSide) > firstSide))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
