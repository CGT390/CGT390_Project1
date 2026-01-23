// src/components/ContentWrapper.jsx
import "./ContentWrapper.css";

const ContentWrapper = ({ children }) => {
  return (
    <main className="page-wrapper">
      {children}
    </main>
  );
};

export default ContentWrapper;
