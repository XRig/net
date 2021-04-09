using System;

namespace Domain
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Project_name { get; set; }
        public DateTime Start_date { get; set; }
        public DateTime Target_end_date { get; set; }
        public DateTime Actual_end_date { get; set; }
        public DateTime Created_on { get; set; }
        public string Created_by { get; set; }
        public DateTime Updated_on { get; set; }
        public string Updated_by { get; set; }
    }
}