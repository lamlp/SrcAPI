using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class TimeRules
    {
        [Key]
        public int TimeRuleId { get; set; }
        public int TimeBaseDisplayId { get; set; }
        public int ProductId { get; set; }

        public Products Products { get; set; }
        public TimeBaseDisplays TimeBaseDisplays { get; set; }
    }
}
