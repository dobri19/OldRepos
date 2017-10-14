using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task01Chef.Models
{
    public class Potato : Vegetable
    {
        private const double PotatoPeelsWeightInPercent = 10;

        public Potato(double weight)
            : base(weight)
        {
        }

        /// <summary>
        /// Peel the Potato. This will decrease his weight with 10%.
        /// </summary>
        public override void Peel()
        {
            var peelsWeight = this.Weight / PotatoPeelsWeightInPercent;
            this.Weight -= peelsWeight;
        }
    }
}
}
