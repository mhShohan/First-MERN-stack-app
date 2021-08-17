import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ExersizeList extends Component {
    constructor(props) {
        super(props);

        this.state = { exersizes: [] };

        this.deleteExersize = this.deleteExersize.bind(this);
    }
    deleteExersize(id) {
        axios
            .delete(`http://localhost:5000/exersizes/${id}`)
            .then((res) => console.log(res.data));

        this.setState({
            exersizes: this.state.exersizes.filter(
                (exersize) => exersize._id !== id
            ),
        });
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/exersizes/')
            .then((res) => {
                this.setState({ exersizes: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1 className="text-center display-1">List of Exersizes</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration(in minuets)</th>
                            <th>Date</th>
                            <th>Acation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.exersizes.map((exersize) => {
                            return (
                                <tr key={exersize._id}>
                                    <td>{exersize.username}</td>
                                    <td>{exersize.description}</td>
                                    <td>{exersize.duration}</td>
                                    <td>{exersize.date.substring(0, 10)}</td>
                                    <td>
                                        <Link
                                            to={`/edit/${exersize._id}`}
                                            className="btn btn-success btn-sm"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="mx-1 btn btn-sm btn-danger"
                                            onClick={() =>
                                                this.deleteExersize(
                                                    exersize._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
