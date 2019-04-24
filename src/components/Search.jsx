var Search = ({ searchStr, onKeyPress, makeSearchRequest }) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => {
      onKeyPress(e.target.value);
      makeSearchRequest(e.target.value);
    }}
    />
    <button className="btn hidden-sm-down" onClick={() => { makeSearchRequest(searchStr); }} >
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div >
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
