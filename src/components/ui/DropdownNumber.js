const DropdownNumber = ({
  defaultValue = 1,
  maxValue = 20,
  parentAction = (val) => {},
}) => {
  if (maxValue == 0) {
    return <p>0</p>;
  }

  let options = [];
  for (let i = 1; i <= maxValue; i++) {
    options.push(i);
  }

  const itemSelectHandler = (event) => {
    // console.log(event.target.value);
    parentAction(event.target.value);
  };

  return (
    <form>
      <select id="count" on onChange={itemSelectHandler}>
        {options.map((op) => (
          <option value={op} selected={op == defaultValue}>
            {op}
          </option>
        ))}
      </select>
    </form>
  );
};

export default DropdownNumber;
