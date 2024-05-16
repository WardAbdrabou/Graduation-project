import { Route, Routes } from "react-router-dom";
// import HomePage from "./Pages/Website/HomePage";
// import Home from "./Pages/Website/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SendOtp from "./Pages/Auth/SendOtp";
import VerifyOtp from "./Pages/Auth/VerifyOtp";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
// import Err403 from './Pages/Auth/403';
// import Err404 from "./Pages/Auth/404";
import PlantDetalis from "./Pages/Website/PlantDetalis";
import Consultation from "./Pages/Website/Consultation";
import SUitablePlant from "./Pages/Website/SuitablePlant";
import PlantDetection from "./Pages/Website/PlantDetection";
import PlantDiseases from "./Pages/Website/PlantDiseases";
// import Services from './Pages/Website/Services';
import Contact from "./Pages/Website/Contact";
import RequireBack from "./Pages/Auth/RequireBack";
import Posts from "./Pages/Dashboard/Posts";
import AddPost from "./Pages/Dashboard/AddPost";
import Post from "./Pages/Dashboard/Post";
import { AllSUITABLEPLANTS, DISEASE, DISEASES, PLANT } from "./Api/Api";
import ResetSuccess from "./Pages/Auth/ResetSuccess";
import VerifySuccess from "./Pages/Auth/VerifySuccess";
import Profile from "./Pages/Website/Profile/Profile";
import Sensor from "./Pages/Website/Sensor";
import Service from "./Pages/Website/Service";
import Chat from "./Pages/Website/Chat/Chat";
import ForgetPassVerify from "./Pages/Auth/FogetPassVerify";
import Hiring from "./Pages/Website/Hiring";
import ThanksApplying from "./Pages/Website/ThanksApplying";
import EditProfile from "./Pages/Website/Profile/EditProfile";
import Conversation from "./Pages/Website/Chat/Conversition";
import MemberShip from "./Pages/Website/MemberShip";
import BuyingMembership from "./Pages/Website/Buying_Membership";
import Err403 from "./Pages/Auth/403";
import ConsultationProfile from "./Pages/Website/ConsultationProfile";
import AllChats from "./Pages/Website/Chat/AllChats";
import RequireAuthMember from "./Pages/Auth/RequireAuth copy";
import AddQuestions from "./Pages/Website/Profile/AddQuestions";
import CardQuestion from "./Components/CardQuestion";
import Home from "./Pages/Website/Home/Home";
import AboutUs from "./Pages/Website/aboutUs";
// import GrowingTips from "./Pages/Website/growingtips/GrowingTips";
// import GrowingTipsDetails from "./Pages/Website/growingtips/GrowingTipsDetails";
import SoilType from "./Pages/Website/SoilType/SoilType";
import SoilTypeDetails from "./Pages/Website/SoilType/SoilTypeDetails";
import TipDetalis from "./Pages/Website/TipDetails";
import GrowingTips from "./Pages/Website/GrowingTips";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public Route */}
        {/* <Route path="/" element={<HomePage />}></Route> */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<RequireBack></RequireBack>}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

         {/* Require Auth page */}
        <Route element={<RequireAuth allowedRole={[1 , 0]}></RequireAuth>}>
        <Route
          path="/suitableplant"
          element={<SUitablePlant></SUitablePlant>}
        ></Route>
         <Route
          path="/plantdetection"
          element={<PlantDetection></PlantDetection>}
        ></Route>
        <Route
          path="/growingtips"
          element={<GrowingTips></GrowingTips>}
        ></Route>
        {/* <Route
          path="growingtips/:GrowingTipsId"
          element={<GrowingTipsDetails />}
        /> */}
        <Route path="/soiltype" element={<SoilType />} />
        <Route path="/soiltype/:soilTypeId" element={<SoilTypeDetails />} />
        <Route path="/profile" element={<Profile></Profile>}>
          {" "}
        </Route>
        {/* <Route path="/addquestion" element={<AddQuestion></AddQuestion>}></Route> */}
        <Route
          path="/editprofile"
          element={<EditProfile></EditProfile>}
        ></Route>
        <Route path="/hiring" element={<Hiring></Hiring>}></Route>
        <Route
          path="/thanksapplying"
          element={<ThanksApplying></ThanksApplying>}
        ></Route>

        <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
        <Route
          path="/membership/:membershipId"
          element={<BuyingMembership></BuyingMembership>}
        ></Route>

        {/* <Route path={`/question/:questionId`} element={<AddComment></AddComment>}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/sensor" element={<Sensor></Sensor>}></Route>

        <Route path="/chat" element={<Chat></Chat>}></Route>
        <Route path="/allchats" element={<AllChats></AllChats>}></Route>
        <Route
          path="/allchats/:convID"
          element={<Conversation></Conversation>}
        ></Route>
                  <Route path='/growingtips' element={<GrowingTips></GrowingTips>}></Route>

          <Route path={`growing_tips/:tipId`} element={<TipDetalis></TipDetalis>}></Route>

        {/* <Route path='/plantdiseases' element={<PlantDiseases></PlantDiseases>}></Route> */}

        {/* <Route path='/plantdetials' element={<PlantDetalis></PlantDetalis>}></Route> */}
        <Route
          path={`${AllSUITABLEPLANTS}/${PLANT}/:plantId`}
          element={<PlantDetalis></PlantDetalis>}
        ></Route>
        <Route
          path={`${DISEASES}/${DISEASE}/:diseaseId`}
          element={<PlantDiseases></PlantDiseases>}
        ></Route>

        <Route
          element={
            <RequireAuthMember
              allowedMemberShip={["3", "2", "1"]}
            ></RequireAuthMember>
          }
        >
          <Route
            path="/consultation"
            element={<Consultation></Consultation>}
          ></Route>
          <Route
            path="/consultation/:consID"
            element={<ConsultationProfile></ConsultationProfile>}
          ></Route>
        </Route>

        </Route>
        {/* <Route path="/*" element={<Err404></Err404>}></Route> */}
        <Route path="/*" element={<Err403></Err403>}></Route>
        <Route path="/sendotp" element={<SendOtp />}></Route>
        <Route path="/verifyotp" element={<VerifyOtp />}></Route>
        <Route
          path="/verifysuccess"
          element={<VerifySuccess></VerifySuccess>}
        ></Route>
        <Route path="/forgetpassverify" element={<ForgetPassVerify />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/resetsuccess" element={<ResetSuccess />}></Route>
        {/* <Route path='/Services' element={<Services></Services>}></Route> */}
        <Route path="/service" element={<Service></Service>}></Route>
       
       

        <Route
          element={
            <RequireAuthMember
              allowedMemberShip={["3", "2", "1"]}
            ></RequireAuthMember>
          }
        >
          <Route
            path="/addquestions"
            element={<AddQuestions></AddQuestions>}
          ></Route>
          <Route
            path="/cardquestion"
            element={<CardQuestion></CardQuestion>}
          ></Route>
        </Route>

        {/* Protected Route */}
        <Route element={<RequireAuth allowedRole={[1]}></RequireAuth>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="posts" element={<Posts></Posts>}></Route>
            <Route
              path="posts/create_post"
              element={<AddPost></AddPost>}
            ></Route>
            <Route path="posts/edit/:id" element={<Post></Post>}></Route>
           
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
