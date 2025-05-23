using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GestionTransacciones.Data;
using GestionTransacciones.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;

namespace GestionTransacciones.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransaccionController : ControllerBase
    {

        private readonly TransaccionContexto _context;
        private readonly HttpClient _httpClient;
        private readonly string _stockApiBaseUrl;

        public TransaccionController(TransaccionContexto transaccionContexto, HttpClient httpClient)
        {
            _httpClient = httpClient;
            _stockApiBaseUrl = "http://localhost:5130/api/Productos/editar/stock";
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

           var urlConParametros = $"{_stockApiBaseUrl}?id={transacciones.idProducto}&stock={transacciones.cantidad}&tipo={transacciones.tipoTransaccion}";

            var response = await _httpClient.PutAsync(urlConParametros, null);


            if (response.IsSuccessStatusCode)
            {
                _context.Transacciones.Add(transacciones);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetTransacciones), new { id = transacciones.id }, transacciones);
            }
            else
            {
                return Ok(new { Message = "Falla con la api" }); ;
            }

             
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