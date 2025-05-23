using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GestionTransacciones.Models
{
    public class Transacciones
    {
        public int id { get; set; }

        public DateTime fecha { get; set; }

        public string tipoTransaccion { get; set; } = null;

        public int idProducto { get; set; }

        public int cantidad { get; set; }

        public decimal precioUnitario { get; set; }

        public decimal precioTotal { get; set; }

        public string detalle { get; set; } = null;
    }
}