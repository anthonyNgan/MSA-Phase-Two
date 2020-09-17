﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace chiropractordashboard.Models
{
    public class chiropractor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int chiropractorId { get; set; }
        [Required, MaxLength(100)]
        public string firstName { get; set; }
        public string lastName { get; set; }
        [Required]
        public string emailAddress { get; set; }
        public int phoneNumber { get; set; }
        [Timestamp]
        public DateTime timeCreated { get; set; }
    }
}
