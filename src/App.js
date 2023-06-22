import "./App.css";
import AddStudent from "./student/AddStudent";
import EditStudent from "./student/EditStudent";
import StudentList from "./student/StudentList";
import { Routes, Route } from "react-router-dom";
import ViewStudent from "./student/ViewStudent";
import DeleteStudent from "./student/DeleteStudent";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<StudentList />}></Route>
          <Route path="/student/add" element={<AddStudent />}></Route>
          <Route path="/student/edit/:id" element={<EditStudent />}></Route>
          <Route path="/student/detail/:id" element={<ViewStudent />}></Route>
          <Route path="/student/delete/:id" element={<DeleteStudent />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
