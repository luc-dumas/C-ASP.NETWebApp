import React, { Component } from 'react'


export class Book extends Component {
    static displayName = Book.name;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            genre: '',
            pages: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        alert("your name is:" +
            this.state.title + "\n" +
            this.state.author + "\n" +
            this.state.genre + "\n" +
            this.state.pages + "\n" 
        );
        event.preventDefault();
    }

    render() {
        return (
            //return something someday
            <div class="formdiv">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" name="title" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>

                    <br />
                    <label>
                        Author:
                        <input type="text" name="author" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>

                    <br />
                    <label>
                        Genre:
                        <input type="text" name="genre" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>

                    <br />
                    <label>
                        Pages:
                        <input type="text" name="pages" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}