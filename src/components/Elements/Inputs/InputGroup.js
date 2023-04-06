import "./InputGroup.css"
const InputGroup = (props) => {
	const label = props.label;
	const type = props.type;
	const id = props.id;
	const name=props.name;
	const onChange =props.onChange;
	const value= props.value;

	return (
		<div className="container">
			<label
				className="lebeltext"
				htmlFor={id}
			>
				{label}
			</label>
			<input
				className="inputField"
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputGroup;