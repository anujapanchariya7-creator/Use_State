function Count( text,count){
console.log(`Rendering${text}`)
return(
    <div>{text}-{count}</div>
)
}
export default Count;

function Count({ text, count }) {
  return (
    <div>
      <h3>{text}: {count}</h3>
    </div>
  );
}

export default Count;
