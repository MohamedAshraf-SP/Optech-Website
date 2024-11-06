import images from "./Humman_Resourse_img";
import { FaCheck } from "react-icons/fa6";

export const Fixed_Header_arr = {
  title: "HR Assistant ",
  description:
    "Save Over £15,000 Annually on HR-Related Costs and Focus on Core Business Growth - By hiring a Human Resource Assistant, your business can save over £15,000 annually. These savings enable you to prioritise other growth areas while still maintaining high-quality HR support.",
};
export const Level_With_MyOutDesk = {
  title:
    "Elevate Interpersonal Experiences With Virtual Assistants for HR Teams",
  Link: "https://www.youtube.com/watch?v=eaAkvMXgNuQ",
  description:
    "<strong>Reduce Hiring Time by Up to 40% with Streamlined Candidate Screening and Onboarding</strong> - UK businesses with dedicated HR support reduce their hiring time by up to 40%. A MyBudgetStaff HR Assistant manages candidate screening, interview scheduling, and onboarding, ensuring you secure top talent swiftly and efficiently without stretching your internal resources.<br/><br/><strong>Save Over £15,000 Annually on HR-Related Costs and Focus on Core Business Growth </strong> - By hiring a Human Resource Assistant through MyBudgetStaff, your business can save over £15,000 annually on employment costs like salaries and National Insurance. These savings enable you to prioritize other growth areas while still maintaining high-quality HR support.<br/><br/><strong>Improve Employee Retention by 25% with Consistent HR Support and Timely Employee Assistance</strong> - UK businesses with proactive HR management see a 25% boost in employee retention. A MyBudgetStaff HR Assistant provides ongoing employee support, assists with performance tracking, and handles administrative tasks, helping you build a positive workplace culture and reduce turnover.",
};
export const What_An_Administrative = [
  {
    title: "Profile Coordinator & Assistant Sourcer",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Assist with job posting
        in various job boards and websites
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Screen resumes, schedule interviews, and coordinate with clients
        throughout the hiring process.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Gather documents, skills checklists from applicants and check for
        eligibility
      </div>,
    ],
  },
  {
    title: "Recruitment",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Provide support to your in-house recruiters and managers
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Perform warm and cold calling to applicants, screen and pre-qualify
        applicants, and schedule appointments.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Paper Screen and prioritize applicants based on skill level and
        positions available
      </div>,
    ],
  },
  {
    title: "Onboarding Support",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Coordinate new employee onboarding activities, including paperwork,
        training, and orientation
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Gather feedback from new employees regarding their onboarding experience
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Assist in delivery of training materials, collecting feedback.
      </div>,
      <div key="4" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Schedule and coordinate
        virtual or in-person introductions with team members and key
        stakeholders
      </div>,
    ],
  },
  {
    title: "Marketing",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Manage the company’s social media accounts, including posting regular
        updates, responding to comments and messages, and engaging with the
        audience
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Gather and compile client testimonials and success stories to showcase
        the company’s positive impact on clients’ businesses
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Help organise and
        promote webinars to educate potential clients on HR and PEO services
      </div>,
      <div key="4" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Email marketing
        campaigns to target potential clients and nurture existing leads.
      </div>,
    ],
  },
  {
    title: "HR Administrative Tasks",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Assistant with routine administrative tasks such as phone, email, and
        chat support
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Assist with payroll, billing, accounting, and bookkeeping and employee
        benefits
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Maintain and update
        client information in databases, ensuring data accuracy and security
      </div>,
      <div key="4" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Organise employee
        records, contracts, and other confidential documents
      </div>,
    ],
  },
];

export const Related_Service_arr = [
  {
    title: "Administrative",
    img: images.Related_Service_one,
    description:
      "Our virtual assistants can handle daily tasks like bookkeeping, calendar scheduling, document review, data entry, CRM management, and more.",
    route: "Services/administrative-virtual-assistants",
  },
  {
    title: "Marketing",
    img: images.Related_Service_two,
    description:
      "Our virtual assistants for executives provide high-level administrative support by managing schedules, handling correspondence, coordinating meetings, and more to enhance their productivity and organization.",
    route: "Services/Marketing-Virtual",
  },
  {
    title: "Customer Service",
    img: images.Related_Service_three,
    description:
      "Trust our virtual assistants to instantly respond to inquiries, guide customers through troubleshooting processes, manage inboxes, and more.",
    route: "Services/Customer-Service",
  },
];
export const Frequentlyasked = [
  {
    Title: "What is HR outsourcing?",
    Answer:
      "Human resources outsourcing (HRO) allow companies to cut costs, access specialized expertise, and focus on their core business strengths by outsourcing HR functions like payroll, benefits administration, recruiting, and training.",
  },
  {
    Title: "What are the benefits of outsourcing your HR team?",
    Answer:
      "Outsourcing roles within a human resources team can bring several benefits, including access to specialized expertise, cost savings by avoiding full-time hires, scalability to handle varying workloads, improved efficiency in administrative tasks, and the ability to focus on core HR functions like talent management and strategy development.",
  },
  {
    Title: "Can I outsource HR tasks if I already have an in-house HR team?",
    Answer:
      "Yes, and this practice is often called “co-sourcing” or “hybrid outsourcing”. Doing so can be a compliment to your in-house HR team; improving their efficiency and success rate, and reducing their workload. In-house experts can focus on their expertise and internal strategy, while the outsourced HR staff handles administrative tasks.",
  },
  {
    Title: "Does outsourcing for HR reduce costs?",
    Answer:
      "Outsourcing some HR functions can often reduce costs for any business. By doing so, a company can reduce or eliminate the expense of hiring and training in-house HR staff, as well as the costs associated with maintaining an entire HR department, such as salaries, benefits, insurance, and office space.",
  },
  {
    Title: "What types of companies should outsource HR?",
    Answer:
      "Just about any company can make beneficial use of outsourcing some aspects of their HR. It ultimately depends on the specific company’s details, vision, and expectations. Common factors that can lead to a company outsourcing HR include; experiencing rapid growth, small budgets for small companies, more internal focus on the core business, and simply the need to reduce costs where possible.",
  },
  {
    Title: "Which HR tasks can you outsource?",
    Answer:
      "There are several HR functions that companies can consider outsourcing. A few examples include recruitment and onboarding, training, and professional development, compliance tracking, performance management, and even overall employee relations. Such as processing feedback, complaints, mediation, and other interpersonal obstacles.",
  },
];
