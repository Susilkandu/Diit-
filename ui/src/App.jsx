import {
  Routes,
  Route,
} from "react-router-dom";
import { useState ,Suspense, lazy} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/HomePage/Home";
import "./App.css";
import "./MediaQuery.css";
import { UniversalContext } from "./context/universal";
import { adminContext } from "./context/admin"
const Admin = lazy(()=>import("./Components/Admin/MainAdminPage/Admin"));
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Branch from "./Components/Branch/Branch";
import AdmissionForm from "./Components/Admission/AdmissionForm";
import Verification from "./Components/Verification/Verification";
import TestExamCcc from "./Components/OnlineTest/TestExamCcc";
import FooterCorse from "./Components/Footer/FooterCourse";
import Errors from "./Components/HomePage/Errors";
import Contact from "./Components/Contact/Contact";
{/* ------------------Start Course---------------------- */ }
import Diploma from "./Components/Course/Diploma";
import Certificate from "./Components/Course/Certificate";
import ComputerLanguage from "./Components/Course/ComputerLanguage";
import GraphicsDesign from "./Components/Course/GraphicsDesign";
import WebDevelopment from "./Components/Course/WebDevelopment";
import ComputerRepairing from "./Components/Course/ComputeeRepairing";
import NielitCourse from "./Components/Course/NielitCourse";
{/* ------------------End Course---------------------- */ }
import StudentChart from "./Components/Admin/Charts/Chart";
import OffersCard from "./Components/HomePage/OffersCard";
import Footer from "./Components/Footer/Footer";
import ToastCard from "./Components/HomePage/Toast/ToastCard";
import Discription from "./Components/HomePage/Discription/Discription";
import Form from "./Form";
import DeleteNoticeComponent from "./Components/Admin/SendOffer/DeleteOffer";
function App() {
  const [confermModal, setConfermModal] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [allStudent, setAllStudent] = useState([]);
  return (
    <>
      <UniversalContext.Provider value={{ confermModal, setConfermModal, adminLogin, setAdminLogin }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<Form />} />

          {/* ------------------Start Course---------------------- */}
          <Route path="/diploma" element={<Diploma />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/ComputerLanguage" element={<ComputerLanguage />} />
          <Route path="/GraphicsDesign" element={<GraphicsDesign />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/ComputerRepairing" element={<ComputerRepairing />} />
          <Route path="/NielitCourse" element={<NielitCourse />} />
          <Route path="/StudentChart" element={<StudentChart />} />
          <Route path="/DeleteNoticeComponent" element={<DeleteNoticeComponent />} />

          {/* ------------------End Course---------------------- */}
          <Route path="/about" element={<About />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/admissionForm" element={<AdmissionForm />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<OffersCard />} />
          <Route path="/TestExamCcc" element={<TestExamCcc />} />
          <Route path="/ToastCard" element={<ToastCard />} />
          <Route path="/Discription" element={<Discription />} />


          <Route exact path="*" Component={Errors} />
          <Route path="/admin" element={<adminContext.Provider value={{ setAllStudent, allStudent }}><Suspense fallback={<center>Loading</center>}><Admin /></Suspense></adminContext.Provider>} />
        </Routes>
        <ToastContainer />
      </UniversalContext.Provider>
      <FooterCorse />

      <Footer />
    </>
  );
}
export default App;
