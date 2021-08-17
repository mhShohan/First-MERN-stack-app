import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditExersize extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: '',
            date: new Date(),
            users: [],
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
        });
    }
    onChangeDuration(e) {
        this.setState({
            duration: e.target.value,
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date,
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();

        const exersize = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        };

        axios
            .post(
                `http://localhost:5000/exersizes/update/${this.props.match.params.id}`,
                exersize
            )
            .then((res) => console.log(res.data));

        window.location = '/';
    }

    componentDidMount() {
        axios
            .get(
                `http://localhost:5000/exersizes/${this.props.match.params.id}`
            )
            .then((res) => {
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date),
                });
            });

        axios.get('http://localhost:5000/users/').then((res) => {
            if (res.data.length > 0) {
                this.setState({
                    users: res.data.map((user) => user.username),
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Edit Exersize</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                            {this.state.users.map((user, index) => {
                                return (
                                    <option key={index} value={user}>
                                        {user}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration(in minuets):</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Edit Exersize"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}
