using System;

namespace Domain
{
    public class Project
    {
        public Guid Id { get; set; }
        public string Project_Name { get; set; }
        public DateTime Start_Date { get; set; }
        public DateTime Target_End_Date { get; set; }
        public DateTime Actual_End_Date { get; set; }
        public DateTime Created_On { get; set; }
        public string Created_By { get; set; }
        public DateTime Updated_on { get; set; }
        public string Updated_by { get; set; }
    }
}