using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace chiropractordashboard.Models
{
    public class calendar
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime? start_event { get; set; }
        public DateTime? end_event { get; set; }

        public string color { get; set; }

        public string text_color { get; set; }

    }
}
