import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages";
import { Layout } from "components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
