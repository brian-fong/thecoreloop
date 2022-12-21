// _app.tsx 

import "../../styles/global.css"

export default function App() {
  return (
    <div className="outer-root-container">
      <div className="inner-root-container">
        <div className="section yellow">
          <div className="logo-container">
            <img src="/thecoreloop-favicon.png" className="logo-img" />
            <h1 className="logo-heading">thecoreloop</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
