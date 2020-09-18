using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace chiropractordashboard.Models
{
    public class order
    {
        [Required]
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set;}

        public int chiropractorId { get; set; }

        public int patientId { get; set; }

        public string title { get; set; }

        public decimal price { get; set; }

        [Timestamp]
        public DateTime timeCreated { get; set; }

        public virtual chiropractor chiropractor { get; set; }

        public virtual patient patient { get; set; }

    }
}
