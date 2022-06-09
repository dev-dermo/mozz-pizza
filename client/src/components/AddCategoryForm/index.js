import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../../utils/mutations';

function AddCategoryForm() {
	const [formState, setFormState] = useState({ name: '', priority: 0 });
	const [addCategory, { error }] = useMutation(ADD_CATEGORY);

	const handleChange = event => {
    let { name, value } = event.target;

		if (name === 'priority') {
			value = parseInt(value);
		}

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

			setFormState({ name: '' });
			window.location.assign('/admin/add-categories');
    } catch (e) {
      console.error(e);
    }
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
						<input
							onChange={handleChange}
							className="form-control"
							placeholder="Category Order (Optional)"
							id="category-priority"
							name="priority"
							type="number"
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