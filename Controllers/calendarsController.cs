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
    public class calendarsController : ControllerBase
    {
        private readonly ChiropractorContext _context;

        public calendarsController(ChiropractorContext context)
        {
            _context = context;
        }

        // GET: api/calendars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<calendar>>> Getcalendar()
        {
            return await _context.calendar.ToListAsync();
        }

        // GET: api/calendars/5
        [HttpGet("{id}")]
        public async Task<ActionResult<calendar>> Getcalendar(int id)
        {
            var calendar = await _context.calendar.FindAsync(id);

            if (calendar == null)
            {
                return NotFound();
            }

            return calendar;
        }

        // PUT: api/calendars/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcalendar(int id, calendar calendar)
        {
            if (id != calendar.Id)
            {
                return BadRequest();
            }

            _context.Entry(calendar).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!calendarExists(id))
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

        // POST: api/calendars
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<calendar>> Postcalendar(calendar calendar)
        {
            _context.calendar.Add(calendar);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getcalendar", new { id = calendar.Id }, calendar);
        }

        // DELETE: api/calendars/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<calendar>> Deletecalendar(int id)
        {
            var calendar = await _context.calendar.FindAsync(id);
            if (calendar == null)
            {
                return NotFound();
            }

            _context.calendar.Remove(calendar);
            await _context.SaveChangesAsync();

            return calendar;
        }

        private bool calendarExists(int id)
        {
            return _context.calendar.Any(e => e.Id == id);
        }
    }
}
