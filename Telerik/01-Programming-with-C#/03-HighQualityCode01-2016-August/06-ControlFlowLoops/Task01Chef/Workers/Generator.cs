using System;

namespace Task01Chef.Workers
{
    public static class Generator
    {
        /// <summary>
        /// Return integer between 0 and passed maxValue.
        /// </summary>
        /// <param name="maxValue">Maximum value.</param>
        /// <returns></returns>
        public static double GenerateRandomWeight(int maxValue)
        {
            var random = new Random();

            return random.NextDouble() * maxValue;
        }
    }
}
