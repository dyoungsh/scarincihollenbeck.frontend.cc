import Router from 'next/router'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import useInput from '../../utils/input-hook';

export default function FrontSearch() {
  const { value:searchInput, bind:bindSearchInput, reset:resetSearchInput } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatUrl = (str) => str.toLowerCase().replace(/\s/g, '+');

    Router.push({
      pathname: '/search',
      query: { q: formatUrl(searchInput), page: 1 },
    })
  }

  return (
    <div className="mw-447">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="simplsearch">
          <Form.Label>
            <span className="sr-only">
              Search Site
            </span>
          </Form.Label>
          <Form.Control type="text" placeholder="Keyword.." {...bindSearchInput} />
        </Form.Group>
        <Button type="submit" variant="danger" className="mt-3 mx-auto d-block btn-lg animated fadeInUp slow fnt-btn">
          Search
        </Button>
      </Form>
    </div>
  );
}