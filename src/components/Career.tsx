import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship Trainee</h4>
                <h5>Grownited Private Limited</h5>
              </div>
              <h3 style={{ fontSize: "32px", alignSelf: "center" }}>
                1/01/2026 - 31/03/2026
              </h3>
            </div>
            <p>
              Applying full-stack development and AI automation skills to build data-driven platforms and real-world technology solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Internship</h4>
                <h5>Elevate Labs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Gained practical, hands-on experience in software development and applied machine learning capabilities.
              <br />
              <br />
              <a href="https://drive.google.com/file/d/12068K-i2xL9X0_1s3dEDQYy_dDhhwSgX/view" target="_blank" className="career-link">
                🔗 View Internship Certificate
              </a>
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Dr. Kiran and Pallavi Patel Global University</h5>
              </div>
              <h3 style={{ fontSize: "32px", alignSelf: "center" }}>
                2022 - 2026
              </h3>
            </div>
            <p>
              Pursuing a comprehensive curriculum in computer science and engineering.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Training</h4>
                <h5>NPTEL & Edunet</h5>
              </div>
              <h3 style={{ fontSize: "32px", alignSelf: "center" }}>
                2023 - 2026
              </h3>
            </div>
            <div className="career-cert-list">
              <a href="https://drive.google.com/file/d/142IOu1mim8C3mehqBecvgw6PDDx2HQty/view?usp=drive_link" target="_blank" className="career-link">
                📜 Large Language Models (LLM) | NPTEL
              </a>
              <a href="https://drive.google.com/file/d/19lr38ZXCyfLaNViG6PUHwAiHXa3S3JBt/view?usp=drive_link" target="_blank" className="career-link">
                📜 Natural Language Processing | NPTEL
              </a>
              <a href="https://drive.google.com/file/d/11NTre9DsAUeVGNFTw3DG5AVqzeW_cK5l/view?usp=drive_link" target="_blank" className="career-link">
                📜 Introduction to Machine Learning | NPTEL
              </a>
              <a href="https://drive.google.com/file/d/1BZjLceJobSIu6uUG125PbtCxS3X2Kgm5/view?usp=sharing" target="_blank" className="career-link">
                🎓 SAP Foundation Training Program | Edunet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
