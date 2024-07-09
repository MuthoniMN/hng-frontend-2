const PageHeader = ({ check, title }) => {
  return (
    <header className="bg-white py-4 px-8 w-full text-2xl">
      <h1>{ title }</h1>
      { check && <div className="flex gap-4">
      <div className="flex gap-2">
       <input type="radio" value="yes" id="select" className="focus:outline-emerald_500 border-emerald-500" />
        <label htmlFor="select">Select all items</label>
      </div>

              <div className="flex gap-2">
       <input type="radio" value="no" id="clear" className="focus:outline-emerald_500 border-black" />
        <label htmlFor="clear">Clear all items</label>
      </div>
      </div> }

      {
        !check && <div className="flex gap-4"> 
        <button className="text-gray-500 px-2" disabled>Select all items</button>
          <button className="bg-gray-100 px-4 py-2 rounded" >Clear all items</button>
        </div>
      }
    </header>
  )}

export default PageHeader;