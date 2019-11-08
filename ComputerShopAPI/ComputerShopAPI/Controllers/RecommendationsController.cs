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
    public class RecommendationsController : ControllerBase
    {
        private readonly ComputerShopAPIContext _context;

        public RecommendationsController(ComputerShopAPIContext context)
        {
            _context = context;
        }

        // GET: api/Recommendations
        [HttpGet]
        public IEnumerable<Recommendations> GetRecommendations()
        {
            return _context.Recommendations;
        }

        // GET: api/Recommendations/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecommendations([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recommendations = await _context.Recommendations.FindAsync(id);

            if (recommendations == null)
            {
                return NotFound();
            }

            return Ok(recommendations);
        }

        // PUT: api/Recommendations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRecommendations([FromRoute] int id, [FromBody] Recommendations recommendations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != recommendations.RecommendationId)
            {
                return BadRequest();
            }

            _context.Entry(recommendations).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecommendationsExists(id))
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

        // POST: api/Recommendations
        [HttpPost]
        public async Task<IActionResult> PostRecommendations([FromBody] Recommendations recommendations)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Recommendations.Add(recommendations);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRecommendations", new { id = recommendations.RecommendationId }, recommendations);
        }

        // DELETE: api/Recommendations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecommendations([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var recommendations = await _context.Recommendations.FindAsync(id);
            if (recommendations == null)
            {
                return NotFound();
            }

            _context.Recommendations.Remove(recommendations);
            await _context.SaveChangesAsync();

            return Ok(recommendations);
        }

        private bool RecommendationsExists(int id)
        {
            return _context.Recommendations.Any(e => e.RecommendationId == id);
        }
    }
}