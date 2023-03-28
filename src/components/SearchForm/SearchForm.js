import { Form, Button, Input, Icon} from "./SearchForm.styled";

export const SearchForm = ({onSubmit}) => {

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(e.target[0].value);
        e.target.reset();
      };
    
      return (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="search"
            placeholder="search movies"
            required
          />
          <Button type="submit">
            <Icon/>
          </Button>
        </Form>
      );
    };

export default SearchForm;