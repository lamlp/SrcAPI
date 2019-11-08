using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ComputerShopAPI.Models;

namespace ComputerShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeRulesController : ControllerBase
    {
        private readonly ComputerShopAPIContext _context;

        public TimeRulesController(ComputerShopAPIContext context)
        {
            _context = context;
        }

        // GET: api/TimeRules
        [HttpGet]
        public IEnumerable<TimeRules> GetTimeRules()
        {
            return _context.TimeRules;
        }

        // GET: api/TimeRules/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTimeRules([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var timeRules = await _context.TimeRules.FindAsync(id);

            if (timeRules == null)
            {
                return NotFound();
            }

            return Ok(timeRules);
        }

        // PUT: api/TimeRules/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTimeRules([FromRoute] int id, [FromBody] TimeRules timeRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != timeRules.TimeRuleId)
            {
                return BadRequest();
            }

            _context.Entry(timeRules).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeRulesExists(id))
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

        // POST: api/TimeRules
        [HttpPost]
        public async Task<IActionResult> PostTimeRules([FromBody] TimeRules timeRules)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TimeRules.Add(timeRules);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTimeRules", new { id = timeRules.TimeRuleId }, timeRules);
        }

        // DELETE: api/TimeRules/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTimeRules([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var timeRules = await _context.TimeRules.FindAsync(id);
            if (timeRules == null)
            {
                return NotFound();
            }

            _context.TimeRules.Remove(timeRules);
            await _context.SaveChangesAsync();

            return Ok(timeRules);
        }

        private bool TimeRulesExists(int id)
        {
            return _context.TimeRules.Any(e => e.TimeRuleId == id);
        }
    }
}