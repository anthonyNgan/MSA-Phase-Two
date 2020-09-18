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
    public class patientsController : ControllerBase
    {
        private readonly ChiropractorContext _context;

        public patientsController(ChiropractorContext context)
        {
            _context = context;
        }

        // GET: api/patients
        [HttpGet]
        public async Task<ActionResult<IEnumerable<patient>>> Getpatient()
        {
            return await _context.patient.ToListAsync();
        }

        // GET: api/patients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<patient>> Getpatient(string id)
        {
            var patient = await _context.patient.FindAsync(id);

            if (patient == null)
            {
                return NotFound();
            }

            return patient;
        }

        // PUT: api/patients/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> Putpatient(string id, patient patient)
        {
            if (id != patient.Id)
            {
                return BadRequest();
            }

            _context.Entry(patient).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!patientExists(id))
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

        // POST: api/patients
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<patient>> Postpatient(patient patient)
        {
            _context.patient.Add(patient);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (patientExists(patient.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("Getpatient", new { id = patient.Id }, patient);
        }

        // DELETE: api/patients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<patient>> Deletepatient(string id)
        {
            var patient = await _context.patient.FindAsync(id);
            if (patient == null)
            {
                return NotFound();
            }

            _context.patient.Remove(patient);
            await _context.SaveChangesAsync();

            return patient;
        }

        private bool patientExists(string id)
        {
            return _context.patient.Any(e => e.Id == id);
        }
    }
}
