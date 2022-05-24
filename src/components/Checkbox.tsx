import { IProps } from "../interfaces/interfaces";
import { filters } from "../staticData/filters";

const CheckBox = ({ handleChange }: IProps) => {
  return (
    <div className='mb-4'>
      <h4 className='text-center text-secondary'>Filters by</h4>
      <form className='list-group-item d-flex justify-content-center align-items-center flex-column'>
        {filters.map(({ label, value }) => (
          <div className='form-check'>
            <input
              className='form-check-input '
              type='checkbox'
              value={value}
              id='flexCheckDefault'
              onChange={handleChange}
            />
            <label
              className='form-check-label'
              htmlFor='flexCheckDefault'
              style={{ width: 220 }}
            >
              {label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default CheckBox;
