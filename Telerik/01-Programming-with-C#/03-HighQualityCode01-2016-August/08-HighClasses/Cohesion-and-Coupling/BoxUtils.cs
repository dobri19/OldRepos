using System;

namespace CohesionAndCoupling
{
    public class BoxUtils
    {
        public static double CalcVolume(Box box)
        {
            double volume = box.Width * box.Height * box.Depth;

            return volume;
        }

        public static double CalcDiagonalXYZ(Box box)
        {
            double widthSquared = box.Width * box.Width;
            double heightSquared = box.Height * box.Height;
            double depthSquared = box.Depth * box.Depth;

            double diagonal = Math.Sqrt(widthSquared + heightSquared + depthSquared);

            return diagonal;
        }

        public static double CalculateSideDiagonal(double firstSide, double secondSide)
        {
            double distance = CalculateDistanceBySizes(firstSide, secondSide);

            return distance;
        }

        private static double CalculateDistanceBySizes(double firstSize, double secondSize)
        {
            double firstSizeSquared = firstSize * firstSize;
            double secondSizeSquared = secondSize * secondSize;

            double distance = Math.Sqrt(firstSizeSquared + secondSizeSquared);

            return distance;
        }
    }
}
