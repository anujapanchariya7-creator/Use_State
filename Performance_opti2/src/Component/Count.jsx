function Count({ text, count }) {
  return <h3>{text}: {count}</h3>;
}

export default React.memo(Count);
