using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionProductos.Models;
using Microsoft.EntityFrameworkCore;

namespace GestionProductos.Data
{
    public class ProductoContexto : DbContext
    {
        public ProductoContexto(DbContextOptions<ProductoContexto> options) : base(options)
        {

        }

        public DbSet<Productos> Productos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Productos>().Property(x => x.precio).HasColumnType("decimal(18,2)");
        }
    }
}
