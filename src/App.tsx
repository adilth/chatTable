import { Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetailsPage from "./pages/PostDetailsPage";
import ChatBox from "./pages/ChatBox";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <header style={{ background: "#f4f4f" }}>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "1.7rem",
            justifyContent: "center",
            listStyle: "none",
          }}
        >
          <li>
            <Link to={"/"}>table</Link>
          </li>
          <li>
            <Link to={"/chat"}>chat</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:postId" element={<PostDetailsPage />} />
        <Route path="/chat" element={<ChatBox />} />
      </Routes>
    </div>
  );
}

export default App;
