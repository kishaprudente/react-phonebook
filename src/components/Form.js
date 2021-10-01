const Form = ({ user, handleSubmit, handleInputChange}) => {
	const { firstName, lastName, phoneNumber } = user;

	return(
		<form onSubmit={handleSubmit}>
			<label>
				First Name: 
				<input type='text' name='firstName' value={firstName || ''} placeholder='First Name' onChange={handleInputChange}></input>
			</label>
			<label>
				Last Name: 
				<input type='text' name='lastName' value={lastName || ''} placeholder='Last Name' onChange={handleInputChange}></input>
			</label>
			<label>
				Phone Number: <input type='text' value={phoneNumber || ''} name='phoneNumber' placeholder='Phone Number' onChange={handleInputChange}></input>
			</label>
			<button type='submit' value='Submit'>Add to contacts</button>
		</form>
	)
}

export default Form;