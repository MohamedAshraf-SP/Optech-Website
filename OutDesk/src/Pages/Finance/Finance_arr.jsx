import images from "./Finance_img";
import { FaCheck } from "react-icons/fa6";

export const Fixed_Header_arr = {
  title: "Assistants for Financial Advisors",
  description:
    "Our assistants are trained to handle administrative tasks, streamline processes, and enhance client communication, allowing you to focus on what you do best providing exceptional financial advice. Let us help you take your business to the next level!",
};
export const Level_With_MyOutDesk = {
  title: "Boost Your Assets With a Financial Advisor Assistant",
  Link: "https://www.youtube.com/watch?v=JRYQ5_Tw-xE",
  description:
    "<strong>Reduce Financial Errors by 30% with Expert Transaction and Budget Management </strong> - UK businesses with dedicated financial support can reduce errors by up to 30%. A MyBudgetStaff Financial Assistant helps manage transactions, budgeting, and expense tracking, ensuring accuracy and helping you make informed financial decisions.<br/><br/><strong>Save Over £20,000 Per Year on Payroll and Financial Management Costs </strong> - By hiring a Financial Assistant from MyBudgetStaff, your business can save up to £20,000 annually on salaries, benefits, and National Insurance contributions. This allows you to allocate funds to business growth while keeping your financials in order.<br/><br/><strong>Free Up Valuable Time and Boost Cash Flow with Timely Invoice and Expense Management </strong> - Efficient invoicing and expense tracking improve cash flow for UK businesses. A MyBudgetStaff Financial Assistant ensures that your invoices are promptly managed and expenses are monitored, freeing you up to focus on strategic initiatives.",
};
export const What_An_Administrative = [
  {
    title: "Executive Tasks",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Schedule and manage the
        CEO’s calendar, including appointments, meetings, conferences, and
        important events.
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Monitor and manage the CEO’s email inbox, responding to urgent messages
        and forwarding important correspondence. Draft and review emails on
        behalf of the CEO.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Act as a communication liaison between the CEO and other company
        executives, staff members, clients, and stakeholders, ensuring effective
        communication flows within the organisation.
      </div>,
    ],
  },
  {
    title: "Administrative Support",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Streamline communication between clients and advisors, ensuring timely
        follow-ups and the smooth exchange of information.
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Handle tasks such as email management, phone calls, and appointment
        coordination.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Schedule and coordinate meetings, conference calls, and video
        conferences.
      </div>,
    ],
  },
  {
    title: "Client Support",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Serve as the main point of contact for clients, addressing inquiries,
        scheduling meetings, and managing appointment calendars.
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Guide new clients through the onboarding process by gathering necessary
        documentation and information.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Respond to client
        inquiries via email, phone, or live chat.
      </div>,
      <div key="4" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Coordinate with the
        finance team to address billing-related concerns.
      </div>,
    ],
  },
  {
    title: "Marketing Tasks",
    Answer: [
      <div key="1" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Schedule and publish finance-related posts on various social media
        platforms to engage your target audience.
      </div>,
      <div key="2" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" />
        Manage email marketing campaigns that deliver valuable financial
        planning tips and updates.
      </div>,
      <div key="3" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Create visually
        appealing financial infographics, social media graphics, and videos to
        enhance brand visibility.
      </div>,
      <div key="4" className="flex flex-row items-start  my-2">
        <FaCheck className="text-primary mr-2  mt-2" /> Engage with clients and
        followers on social media and other platforms.
      </div>,
    ],
  },

  // You can add more objects here if needed
];

export const Related_Service_arr = [
  {
    title: "Administrative",
    img: images.Related_Service_one,
    description:
      "Our virtual assistants can manage daily tasks such as bookkeeping, calendar scheduling, document review, data entry, CRM management, and more.",
    route: "Services/administrative-virtual-assistants",
  },
  {
    title: "Executive",
    img: images.Related_Service_two,
    description:
      "Our virtual assistants for executives offer high-level administrative support by managing schedules, handling correspondence, coordinating meetings, and more, all aimed at enhancing productivity and organisation.",
    route: "Services/virtual-receptionist",
  },
  {
    title: "Customer Service",
    img: images.Related_Service_three,
    description:
      "Trust our virtual assistants to respond promptly to inquiries, guide customers through troubleshooting processes, manage inboxes, and handle various tasks efficiently.",
    route: "Services/Customer-Service",
  },
];
export const Frequentlyasked = [
  {
    Title: "What is a financial virtual assistant?",
    Answer:
      "A financial virtual assistant help streamline communication between clients and advisors, ensuring timely follow-ups and the smooth exchange of information. Additionally, assistants can conduct research and prepare reports, allowing advisors to concentrate on strategy and client relations. This support ultimately leads to better client experiences and more effective financial planning.",
  },
  {
    Title: "How much does it cost to hire an administrative VA?",
    Answer:
      "With MyBudgetStaff, you’ll pay less than 70% of the cost of in-house staff. We handle all aspects of recruitment, background checks, payroll, and benefits on your behalf, removing the risks associated with outsourcing your financial assistant role.",
  },
];
