function Wrapper({children,color="green"}) {
  return (
    <div style={{color:color, border:"5px solid green", width:"250px", padding:"15px", margin:"5px"}}>
      {children}
    </div>
  )
}

export default Wrapper;