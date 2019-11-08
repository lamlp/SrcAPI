using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ComputerShopAPI.Models
{
    public partial class TimeBaseDisplays
    {
        public TimeBaseDisplays()
        {
            TimeRule = new HashSet<TimeRules>();
        }

        [Key]
        public int TimeBaseDisplayId { get; set; }
        public DateTime? FromTime { get; set; }
        public DateTime? ToTime { get; set; }
        public TimeSpan? FromHour { get; set; }
        public TimeSpan? ToHour { get; set; }
        public int? DayOfWeek { get; set; }

        public ICollection<TimeRules> TimeRule { get; set; }
    }
}
