using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class Recommendations
    {
        [Key]
        public int RecommendationId { get; set; }
        public int ProductId { get; set; }

        public Products Products { get; set; }
    }
}
