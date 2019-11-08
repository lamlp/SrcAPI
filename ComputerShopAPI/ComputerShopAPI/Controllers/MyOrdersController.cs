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
    public class MyOrdersController : ControllerBase
    {
        private readonly ComputerShopAPIContext _context;

        public MyOrdersController(ComputerShopAPIContext context)
        {
            _context = context;
        }

        // GET: api/MyOrders
        [HttpGet]
        public IEnumerable<MyOrders> GetMyOrders()
        {
            return _context.MyOrders;
        }

        // GET: api/MyOrders/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMyOrders([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var myOrders = await _context.MyOrders.FindAsync(id);

            if (myOrders == null)
            {
                return NotFound();
            }

            return Ok(myOrders);
        }

        // PUT: api/MyOrders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMyOrders([FromRoute] int id, [FromBody] MyOrders myOrders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != myOrders.MyOrderId)
            {
                return BadRequest();
            }

            _context.Entry(myOrders).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MyOrdersExists(id))
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

        // POST: api/MyOrders
        [HttpPost]
        public async Task<IActionResult> PostMyOrders([FromBody] MyOrders myOrders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MyOrders.Add(myOrders);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMyOrders", new { id = myOrders.MyOrderId }, myOrders);
        }

        // DELETE: api/MyOrders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMyOrders([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var myOrders = await _context.MyOrders.FindAsync(id);
            if (myOrders == null)
            {
                return NotFound();
            }

            _context.MyOrders.Remove(myOrders);
            await _context.SaveChangesAsync();

            return Ok(myOrders);
        }

        private bool MyOrdersExists(int id)
        {
            return _context.MyOrders.Any(e => e.MyOrderId == id);
        }
    }
}