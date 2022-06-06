import { Home } from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Contact from "./components/pages/Contact";
import { ToDoList } from "./components/pages/ToDoList";
import LoginReg from "./components/pages/auth/LoginReg";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./components/pages/auth/ResetPassword";
import Qrcode from "./components/pages/Qrcode";
import State from "./components/pages/State";
import FormValidationMui from "./components/pages/FormValidationMui";
import CustomeFormValidation from "./components/pages/CustomeFormValidation";
import { Dashboard } from "./components/pages/Dashboard";
import ApexChartClassComponent from "./components/pages/ApexChartClassComponent";
import UseStateObject from "./components/pages/UseStateObject";
import ApexChartFunctionComponent from "./components/pages/ApexChartFunctionComponent";
import UseStateWithArray from "./components/pages/UseStateWithArray";
import UseEffect from "./components/pages/UseEffect";
import UseEffectWithApi from "./components/pages/UseEffectWithApi";
import JsonForm from "./components/pages/JsonForm";
import Search from "./components/pages/Search/Search";
import ComponentMain from "./components/pages/contextapi/ComponentMain";
import AddFormInput from "./components/pages/AddFormInput";
import MultiStepFormMui from "./components/pages/MultiStepper/MultiStepFormMui";
import ResumeUploader from "./components/pages/ResumeUploader.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginReg />} />
            <Route path="todolist" element={<ToDoList />} />
            <Route path="Qrcode" element={<Qrcode />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="state" element={<State />} />
            <Route
              path="apexchartclassomponent"
              element={<ApexChartClassComponent />}
            />
            <Route
              path="apexchartfunctioncomponent"
              element={<ApexChartFunctionComponent />}
            />
            <Route path="formvalidationmui" element={<FormValidationMui />} />
            <Route
              path="customeformvalidation"
              element={<CustomeFormValidation />}
            />
            <Route path="usestateobject" element={<UseStateObject />} />
            <Route path="usestatewitharray" element={<UseStateWithArray />} />
            <Route path="useeffect" element={<UseEffect />} />
            <Route path="useeffectwithapi" element={<UseEffectWithApi />} />
            <Route path="jsonform" element={<JsonForm />} />
            <Route path="search" element={<Search />} />
            <Route path="componentmain" element={<ComponentMain />} />
            <Route path="addforminput" element={<AddFormInput />} />
            <Route path="multistepformmui" element={<MultiStepFormMui />} />
            <Route path="resumeuploader" element={<ResumeUploader />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
