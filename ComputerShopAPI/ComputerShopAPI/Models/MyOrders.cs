using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ComputerShopAPI.Models
{
    public partial class MyOrders
    {   
        [Key]
        [Required]
        public int MyOrderId { get; set; }
        
        public int CusId { get; set; }
        public int OrderId { get; set; }

        [ForeignKey("OrderId")]
        public Orders Orders { get; set; }
        [ForeignKey("CusId")]
        public Customers Customers { get; set; }
    }
}
