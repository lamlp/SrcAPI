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
    public class SubCategoriesController : ControllerBase
    {
        private readonly ComputerShopAPIContext _context;

        public SubCategoriesController(ComputerShopAPIContext context)
        {
            _context = context;
        }

        // GET: api/SubCategories
        [HttpGet]
        public IEnumerable<SubCategories> GetSubCategories()
        {
            return _context.SubCategories;
        }

        // GET: api/SubCategories/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSubCategories([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subCategories = await _context.SubCategories.FindAsync(id);

            if (subCategories == null)
            {
                return NotFound();
            }

            return Ok(subCategories);
        }

        // PUT: api/SubCategories/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubCategories([FromRoute] int id, [FromBody] SubCategories subCategories)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subCategories.SubCategoryId)
            {
                return BadRequest();
            }

            _context.Entry(subCategories).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubCategoriesExists(id))
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

        // POST: api/SubCategories
        [HttpPost]
        public async Task<IActionResult> PostSubCategories([FromBody] SubCategories subCategories)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SubCategories.Add(subCategories);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubCategories", new { id = subCategories.SubCategoryId }, subCategories);
        }

        // DELETE: api/SubCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubCategories([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var subCategories = await _context.SubCategories.FindAsync(id);
            if (subCategories == null)
            {
                return NotFound();
            }

            _context.SubCategories.Remove(subCategories);
            await _context.SaveChangesAsync();

            return Ok(subCategories);
        }

        private bool SubCategoriesExists(int id)
        {
            return _context.SubCategories.Any(e => e.SubCategoryId == id);
        }
    }
}