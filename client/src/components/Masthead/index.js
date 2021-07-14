function Masthead({ title }) {
	return (
		<div className="row">
			<div className="col">
				<h1 className="text-center mt-4">
					{title}<br />
					* * *
				</h1>
			</div>
		</div>
	);
}

export default Masthead;