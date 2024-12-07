export const Card = ({ element, selectOption }) => {
  return (
    <div onClick={() => selectOption(element)} >
        <p>{element.value}</p>
        <p>{JSON.stringify(element.flipped)}</p>
        <p>{JSON.stringify(element.matched)}</p>
    </div>
  )
}
