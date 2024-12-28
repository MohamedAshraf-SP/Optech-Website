import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import { lazy, Suspense } from "react";
import Loader from "../Components/Loader";
import Protected_route from "../Utils/Protected_route.jsx";

// Lazy load components
const NotFound = lazy(() => import("../Components/NotFound"));

// Services Pages
const AdministrativeAssistant = lazy(() =>
  import("../Pages/Administrative/Administrative_Assistant")
);
const VirtualReceptionist = lazy(() =>
  import("../Pages/Virtual-Receptionist/Virtual_Receptionist")
);
const CustomerService = lazy(() =>
  import("../Pages/Customer-Service/CustomerService")
);
const MarketingVirtual = lazy(() =>
  import("../Pages/Marketing-Virtual/Marketing_Virtual")
);
const InsideSales = lazy(() => import("../Pages/inside-sales/inside_sales"));
const Bookkeeper = lazy(() => import("../Pages/BookKeeper/Bookkeeping"));
const CareCoordinator = lazy(() =>
  import("../Pages/Care-Coordinator/Care_Coordinator.jsx")
);
const BusinessDevelopment = lazy(() =>
  import("../Pages/business-development/Business_Development.jsx")
);
const HelpDesk = lazy(() => import("../Pages/Help_Desk/Help_Desk"));
const VirtualPersonassistant = lazy(() =>
  import("../Pages/Virtual-Personal-Assistant/Virtual_person_assistant")
);
const LoanProcessor = lazy(() =>
  import("../Pages/Loan-Processor-Virtual/Loan_Processor_Virtual")
);
// Industry pages
const EcommerceVirtual = lazy(() =>
  import("../Pages/EcommerceVirtual/Ecommerce_Virtual")
);
const FinancialPlanning = lazy(() => import("../Pages/Finance/Finance"));
const ProjectManagement = lazy(() =>
  import("../Pages/Project-Management/Project_Management")
);
const HealthCare = lazy(() => import("../Pages/Health-Care/Health_Care"));
const HumanResources = lazy(() =>
  import("../Pages/Human-Resources/Humman_Resourse")
);
const RealState = lazy(() => import("../Pages/Real-State/RealState"));
const TechVirtual = lazy(() => import("../Pages/Tech-Virtual/Tech_Virtual"));
const VirtualInsurance = lazy(() =>
  import("../Pages/Virtual-Insurance/Virtual_Insurance")
);
// services page
const Services = lazy(() => import("../Pages/Services/Services"));
// Learn pages
const Faq = lazy(() => import("../Pages/Faq/Faq"));
const Reviews = lazy(() => import("../Pages/Reviews/Reviews"));

// Dashboard page
const UserDashboard = lazy(() => import("../Pages/Dashborad"));

// Contact page
const UserContact = lazy(() => import("../Pages/Contact"));

// Book a call page
const BookCall = lazy(() => import("../Pages/BookCall"));
// loginpage
const Login = lazy(() => import("../Pages/LoginPage.jsx"));
// Utility function to wrap components with Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
 
  {
    element: withSuspense(MainLayout),
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "services",
    children: [
      {
        path: "administrative-virtual-assistants",
        element: withSuspense(AdministrativeAssistant),
      },
      {
        path: "virtual-receptionist",
        element: withSuspense(VirtualReceptionist),
      },
      { path: "customer-service", element: withSuspense(CustomerService) },
      { path: "marketing-virtual", element: withSuspense(MarketingVirtual) },
      { path: "inside-sales", element: withSuspense(InsideSales) },
      { path: "virtual-bookkeeper", element: withSuspense(Bookkeeper) },
      {
        path: "care-coordinator",
        element: withSuspense(CareCoordinator),
      },
      {
        path: "business-development",
        element: withSuspense(BusinessDevelopment),
      },
      { path: "It-HelpDesk", element: withSuspense(HelpDesk) },
      {
        path: "Virtual-person-assistant",
        element: withSuspense(VirtualPersonassistant),
      },
      {
        path: "Loan-Processor-Assistant",
        element: withSuspense(LoanProcessor),
      },
    ],
  },
  {
    path: "industry",
    children: [
      { path: "ecommerce-virtual", element: withSuspense(EcommerceVirtual) },
      { path: "financial-planning", element: withSuspense(FinancialPlanning) },
      { path: "project-management", element: withSuspense(ProjectManagement) },
      { path: "health-care", element: withSuspense(HealthCare) },
      { path: "human-resources", element: withSuspense(HumanResources) },
      { path: "tech-virtual", element: withSuspense(TechVirtual) },
      { path: "virtual-insurance", element: withSuspense(VirtualInsurance) },
      { path: "real-state", element: withSuspense(RealState) },
    ],
  },
  {
    path: "learn",
    children: [
      { path: "faq", element: withSuspense(Faq) },
      { path: "reviews", element: withSuspense(Reviews) },
    ],
  },
  {
    path: "ALL-Services",
    element: withSuspense(Services),
  },
  {
    path: "dashboard",

    element: (
      <>
        <Protected_route>{withSuspense(UserDashboard)}</Protected_route>
      </>
    ),
  },
  {
    path: "contact",
    element: withSuspense(UserContact),
  },
  {
    path: "book-call",
    element: withSuspense(BookCall),
  },
  {
    path: "login",
    element: withSuspense(Login),
  },
  {
    path: "*",
    element: withSuspense(NotFound),
  },
]);
