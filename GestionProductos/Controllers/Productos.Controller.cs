using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using GestionProductos.Data;
using GestionProductos.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace GestionProductos.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowAngularDevOrigin")]
    public class ProductosController : ControllerBase
    {
        private readonly ProductoContexto _context;

        public ProductosController(ProductoContexto productoContexto)
        {
            _context = productoContexto;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Productos>>> GetProducts()
        {
            return await _context.Productos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Productos>> AgregarProductos(Productos producto)
        {
            _context.Productos.Add(producto);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProducts), new { id = producto.id }, producto);
        }

        [HttpGet]
        [Route("producto")]
        public async Task<IActionResult> verProducto(int id)
        {
            var producto = await _context.Productos.FindAsync(id);

            if (producto == null)
            {
                return NotFound();
            }

            return Ok(producto);
        }


        [HttpPut]
        [Route("editar")]
        public async Task<IActionResult> ActualizarProducto(int id, Productos productos)
        {
            var productoExistente = await _context.Productos.FindAsync(id);

            productoExistente!.nombre = productos.nombre;
            productoExistente!.descripcion = productos.descripcion;
            productoExistente!.categoria = productos.categoria;
            productoExistente!.imagen = productos.imagen;
            productoExistente!.precio = productos.precio;

            await _context.SaveChangesAsync();

            return Ok(productoExistente);
        }

        [HttpDelete]
        public async Task<IActionResult> EliminarProducto(int id)
        {
            var producto = await _context.Productos.FindAsync(id);

            _context.Productos.Remove(producto);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}