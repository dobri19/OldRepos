using System;

namespace Abstraction
{
    public class Point3D
    {
        public static readonly Point3D Center = new Point3D(0, 0, 0);

        public Point3D(double x, double y, double z)
        {
            this.X = x;
            this.Y = y;
            this.Z = z;
        }

        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }

        public double DistanceTo(Point3D otherPoint)
        {
            double distanceX = (otherPoint.X - this.X) * (otherPoint.X - this.X);
            double distanceY = (otherPoint.Y - this.Y) * (otherPoint.Y - this.Y);
            double distanceZ = (otherPoint.Z - this.Z) * (otherPoint.Z - this.Z);

            double distance = Math.Sqrt(distanceX + distanceY + distanceZ);

            return distance;
        }
    }
}
