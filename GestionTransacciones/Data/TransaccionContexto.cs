using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionTransacciones.Models;
using Microsoft.EntityFrameworkCore;

namespace GestionTransacciones.Data
{
    public class TransaccionContexto : DbContext
    {
        public TransaccionContexto(DbContextOptions<TransaccionContexto> options): base(options) { }
        
        public DbSet<Transacciones> Transacciones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transacciones>().Property(x => x.precioTotal).HasColumnType("decimal(18,2)");
        }

    }
       

}