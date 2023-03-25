
export const SearchForm = ({onSubmit}) => {

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(e.target[0].value);
        e.target.reset();
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="search movies"
            required
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

export default SearchForm;