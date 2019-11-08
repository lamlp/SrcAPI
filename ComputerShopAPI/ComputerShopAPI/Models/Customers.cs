using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class Customers
    {
        public Customers()
        {
            MyOrders = new HashSet<MyOrders>();
        }
        [Key]
        [Required]
        public int CusId { get; set; }
        [Required]
        public string Account { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string CusName { get; set; }
        public DateTime BirthDay { get; set; }
        public bool Gender { get; set; }
        [Required]
        public string PersonalId { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Email { get; set; }
        public bool CusType { get; set; }

        public ICollection<MyOrders> MyOrders { get; set; }
    }
}
