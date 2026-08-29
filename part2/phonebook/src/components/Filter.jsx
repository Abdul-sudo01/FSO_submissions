const Filter = ({ filter, setFilter }) =>(
    <div>
     Search Contact
     <input value={filter} onChange={(e)=>setFilter(e.target.value)} />
    </div>
  );

export default  Filter ;
