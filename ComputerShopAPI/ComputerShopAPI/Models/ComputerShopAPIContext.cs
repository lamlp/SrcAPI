using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ComputerShopAPI.Models
{
    public class ComputerShopAPIContext : DbContext
    {
        public ComputerShopAPIContext(DbContextOptions<ComputerShopAPIContext> options):base (options)
        {

        }

        public virtual DbSet<Admins> Admins { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<MyOrders> MyOrders { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<OrderDetails> OrderDetails { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Recommendations> Recommendations { get; set; }
        public virtual DbSet<SubCategories> SubCategories { get; set; }
        public virtual DbSet<TimeBaseDisplays> TimeBaseDisplays { get; set; }
        public virtual DbSet<TimeRules> TimeRules { get; set; }
    }
}
