using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chiropractordashboard.Models
{
    public class patient
    {
        public string Id { get; set; }
        public string firstName{ get; set; }

        public string lastName { get; set; }
        public string history { get; set; }

        public string symptoms { get; set; }

        public DateTime lastVisited { get; set; }
        public DateTime timeCreated { get; set; }
    }
}
