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
    public class TimeBaseDisplaysController : ControllerBase
    {
        private readonly ComputerShopAPIContext _context;

        public TimeBaseDisplaysController(ComputerShopAPIContext context)
        {
            _context = context;
        }

        // GET: api/TimeBaseDisplays
        [HttpGet]
        public IEnumerable<TimeBaseDisplays> GetTimeBaseDisplays()
        {
            return _context.TimeBaseDisplays;
        }

        // GET: api/TimeBaseDisplays/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTimeBaseDisplays([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var timeBaseDisplays = await _context.TimeBaseDisplays.FindAsync(id);

            if (timeBaseDisplays == null)
            {
                return NotFound();
            }

            return Ok(timeBaseDisplays);
        }

        // PUT: api/TimeBaseDisplays/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTimeBaseDisplays([FromRoute] int id, [FromBody] TimeBaseDisplays timeBaseDisplays)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != timeBaseDisplays.TimeBaseDisplayId)
            {
                return BadRequest();
            }

            _context.Entry(timeBaseDisplays).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TimeBaseDisplaysExists(id))
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

        // POST: api/TimeBaseDisplays
        [HttpPost]
        public async Task<IActionResult> PostTimeBaseDisplays([FromBody] TimeBaseDisplays timeBaseDisplays)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TimeBaseDisplays.Add(timeBaseDisplays);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTimeBaseDisplays", new { id = timeBaseDisplays.TimeBaseDisplayId }, timeBaseDisplays);
        }

        // DELETE: api/TimeBaseDisplays/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTimeBaseDisplays([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var timeBaseDisplays = await _context.TimeBaseDisplays.FindAsync(id);
            if (timeBaseDisplays == null)
            {
                return NotFound();
            }

            _context.TimeBaseDisplays.Remove(timeBaseDisplays);
            await _context.SaveChangesAsync();

            return Ok(timeBaseDisplays);
        }

        private bool TimeBaseDisplaysExists(int id)
        {
            return _context.TimeBaseDisplays.Any(e => e.TimeBaseDisplayId == id);
        }
    }
}