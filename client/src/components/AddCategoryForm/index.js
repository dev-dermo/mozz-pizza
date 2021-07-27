import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../../utils/mutations';

function AddCategoryForm() {
	const [formState, setFormState] = useState({ name: '' });
	const [addCategory, { error }] = useMutation(ADD_CATEGORY);

	const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
      const { data } = await addCategory({
        variables: { ...formState }
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }

		setFormState({ name: '' });
		window.location.assign('/admin/add-categories');
	};

	return (
		<div className="row">
			<div className="col-12">
				<h2>Add a new category</h2>	
			</div>

			<div className="col">
				<form onSubmit={handleFormSubmit}>
					<div className="input-group">
						<input
							value={formState.name}
							onChange={handleChange}
							className="form-control"
							placeholder="Category Name"
							id="category-name"
							name="name"
						/>
						<div className="input-group-append">
							<button className="btn btn-outline-primary" type="submit">Add Category</button>
						</div>
					</div>
				</form>

				{error && <div>Add Category failed</div>}
			</div>
		</div>
	);
}

export default AddCategoryForm;