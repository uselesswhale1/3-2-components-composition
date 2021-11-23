const Qualities = ({ qualities }) => {
  const array = qualities.map((object) => {
    return [object.name, object.color]
  })
  const result = array.map((arr) => {
    const spanClass = `badge bg-${arr[1]} m-1`
    return (
      <>
        <span className={spanClass}>{arr[0]}</span>
      </>
    )
  })
  return result
}

export default Qualities
