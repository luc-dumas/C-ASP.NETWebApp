import React, { Component } from 'react';


export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { books: [], loading: true };
  }

  componentDidMount() {
    this.populateBookData();
  }

  static renderBookTable(books) {
    return (
      <table>
    
        <tbody>
          {books.map(book =>
            <tr key={book.title}>
                  <td><th>Title:</th>{book.title}</td> 
                  <td> <th>Author:</th>{book.author}</td>
                  <td><th>Genre:</th>{book.genre}</td>
                  <td> <th>Pages:</th>{book.pages}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderBookTable(this.state.books);

    return (
      <div class="displaydiv">
        <h1>Book Collection</h1>
        <p>This website has a collection of assorted books.</p>
        {contents}
      </div>
    );
  }

  async populateBookData() {
    const response = await fetch('api/Book');
    const data = await response.json();
    this.setState({ books: data, loading: false });
  }
}
