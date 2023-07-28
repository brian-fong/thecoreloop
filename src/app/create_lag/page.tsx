export default function Create_LAG() {
  return (
    <main>
      <div className="column-container">

        {/* TCL Logo Container */}
        <div className="tcl-container black">
          <div className="logo-img-container">
            <img
              src="/thecoreloop-logo-transparent.png"
              className="logo-img"
            />
          </div>

          <p className="quote">
            UI Inspired by{" "}
            <a
              href="https://classic.curve.fi/"
              className="curve-link"
              tabIndex={-1}
            >
              Curve Finance (Classic)
            </a>
          </p>
        </div>

        <div className="tcl-container gray">
          <h2 className="lag-heading">
            Create Look at Gaming
          </h2>

          <div className="num-date-container">
            <div className="input-container small row">
              <label className="lag-label row">
                Look at Gaming #
              </label>
              <input
                className="input lag-number"
                type="text"
                maxLength={3}
                placeholder="000"
                autoFocus={true}
              />
            </div>

            <div className="input-container small row">
              <label className="lag-label row">
                Date
              </label>
              <input
                className="input lag-date"
                type="date"
              />
            </div>
          </div>

          <div className="input-container column">
            <label className="lag-label column">
              Subheading
            </label>
            <textarea
              className="input lag-subheading"
            />
          </div>

          <div className="input-container column">
            <label className="lag-label column">
              Special Insights
            </label>
            <textarea
              className="input lag-subheading"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
