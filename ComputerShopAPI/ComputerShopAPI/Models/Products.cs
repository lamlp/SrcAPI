using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerShopAPI.Models
{
    public partial class Products
    {
        public Products()
        {
            OrdersDetails = new HashSet<OrderDetails>();
            Recommendations = new HashSet<Recommendations>();
            TimeRules = new HashSet<TimeRules>();
        }

        [Key]
        public int ProductId { get; set; }

        [Required]
        public string ProductName { get; set; }
        [Required]
        public string Image { get; set; }
        public int Price { get; set; }
        public string Descriptions { get; set; }

        public int SubCategoryId { get; set; }

        public ICollection<OrderDetails> OrdersDetails { get; set; }
        public ICollection<Recommendations> Recommendations{ get; set; }
        public ICollection<TimeRules> TimeRules { get; set; }
    }
}
