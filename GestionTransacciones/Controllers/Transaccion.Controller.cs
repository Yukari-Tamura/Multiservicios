using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionTransacciones.Data;
using GestionTransacciones.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GestionTransacciones.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransaccionController : ControllerBase
    {

        private readonly TransaccionContexto _context;
        public TransaccionController(TransaccionContexto transaccionContexto)
        {
            _context = transaccionContexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transacciones>>> GetTransacciones()
        {
            return await _context.Transacciones.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Transacciones>> AgregarTransaccion(Transacciones transacciones)
        {
            _context.Transacciones.Add(transacciones);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTransacciones), new { id = transacciones.id }, transacciones);
        }

        [HttpGet]
        [Route("transaccion")]
        public async Task<IActionResult> verTransaccion(int id)
        {
            var transaccion = await _context.Transacciones.FindAsync(id);

            if (transaccion == null)
            {
                return NotFound();
            }
            return Ok(transaccion);
        }

        [HttpPut]
        [Route("editar")]
        public async Task<IActionResult> ActualizarTransaccion(int id, Transacciones transacciones)
        {
            var transaccionExistente = await _context.Transacciones.FindAsync(id);

            transaccionExistente!.tipoTransaccion = transacciones.tipoTransaccion;
            transaccionExistente!.idProducto = transacciones.idProducto;
            transaccionExistente!.cantidad = transacciones.cantidad;
            transaccionExistente!.precioUnitario = transacciones.precioUnitario;
            transaccionExistente!.precioTotal = transacciones.precioTotal;
            transaccionExistente!.detalle = transacciones.detalle;

            await _context.SaveChangesAsync();

            return Ok(transaccionExistente);
        }

        [HttpDelete]
        public async Task<IActionResult> EliminarTransaccion(int id)
        {
            var transaccion = await _context.Transacciones.FindAsync(id);

            _context.Transacciones.Remove(transaccion);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}