using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using chiropractordashboard.Data;
using chiropractordashboard.Models;

namespace chiropractordashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ordersController : ControllerBase
    {
        private readonly ChiropractorContext _context;

        public ordersController(ChiropractorContext context)
        {
            _context = context;
        }

        // GET: api/orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<order>>> Getorder()
        {
            return await _context.order.ToListAsync();
        }

        // GET: api/orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<order>> Getorder(string id)
        {
            var order = await _context.order.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // PUT: api/orders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putorder(string id, order order)
        {
            if (id != order.Id)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!orderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/orders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<order>> Postorder(order order)
        {
            _context.order.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getorder", new { id = order.Id }, order);
        }

        // DELETE: api/orders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<order>> Deleteorder(string id)
        {
            var order = await _context.order.FindAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.order.Remove(order);
            await _context.SaveChangesAsync();

            return order;
        }

        private bool orderExists(string id)
        {
            return _context.order.Any(e => e.Id == id);
        }
    }
}
