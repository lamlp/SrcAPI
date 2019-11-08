using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public class Admins
    {
        [Key]
        [Required]
        public string Account { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
