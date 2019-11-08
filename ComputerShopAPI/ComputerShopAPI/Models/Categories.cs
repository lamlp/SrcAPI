using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class Categories
    {
        public Categories()
        {
            SubCategories = new HashSet<SubCategories>();
        }

        [Key]
        [Required]
        public int CategoryId { get; set; }
        [Required]
        public string CategoryName { get; set; }

        public ICollection<SubCategories> SubCategories { get; set; }
    }
}
