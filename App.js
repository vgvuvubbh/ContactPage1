import { Routes, Route } from "react-router-dom";
import { Contact } from "../b2b_front/src/components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  );
}

export default App;
