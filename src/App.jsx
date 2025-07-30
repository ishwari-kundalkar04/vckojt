// src/App.jsx
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import{ useState } from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footer from "./components/Footer/Footer";
function App() {
  const [showPopup , setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
    <>
  <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Ishwari Vivek Kundalkar"
          studentPhotoUrl="/Images/isha.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
       />
     </div>
       <div>     
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/CoursesPage" element={<CoursesPage />} />
            <Route path="/AdmissionsPage" element={<AdmissionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
<ChatbotComponent/>
    </BrowserRouter>
    
      </div>
    </>
  );
}
 export default App;