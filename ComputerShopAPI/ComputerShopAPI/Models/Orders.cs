using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class Orders
    {
        public Orders()
        {
            MyOrders = new HashSet<MyOrders>();
            OrderDetails = new HashSet<OrderDetails>();
        }

        [Key]
        public int OrderId { get; set; }
        [Required]
        public string CusName { get; set; }
        public string CusAddress { get; set; }
        public string CusPhoneNumber { get; set; }
        public string Note { get; set; }
        public bool Status { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime DeliveryDate { get; set; }

        public ICollection<MyOrders> MyOrders { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
