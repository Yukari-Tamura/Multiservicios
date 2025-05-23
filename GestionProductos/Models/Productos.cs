using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionProductos.Models
{
    public class Productos
    {

        public int id { get; set; }

        public string nombre { get; set; } = null;

        public string descripcion { get; set; } = null;

        public string categoria { get; set; } = null;

        public string imagen { get; set; } = null;

        public decimal precio { get; set; }

        public int stock { get; set; }
    }
}