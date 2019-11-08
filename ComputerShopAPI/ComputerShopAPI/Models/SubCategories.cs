using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerShopAPI.Models
{
    public partial class SubCategories
    {
        [Key]
        public int SubCategoryId { get; set; }
        [Required]
        public string SubCategoryName { get; set; }
        public int CategoryId { get; set; }

        public Categories Categories { get; set; }
        

        public ICollection<Products> Products { get; set; }
    }
}
