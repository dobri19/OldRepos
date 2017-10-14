using Abstraction;
using System;

namespace CohesionAndCoupling
{
    public static class PointUtils
    {
        public static double CalcDistance2D(Point3D first, Point3D second)
        {
            double distanceX = (second.X - first.X) * (second.X - first.X);
            double distanceY = (second.Y - first.Y) * (second.Y - first.Y);

            double distance = Math.Sqrt(distanceX + distanceY);

            return distance;
        }

        public static double CalcDistance3D(Point3D first, Point3D second)
        {
            double distance = first.DistanceTo(second);

            return distance;
        }
    }
}
