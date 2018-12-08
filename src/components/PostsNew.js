import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';  

import { createPost } from '../actions/PostActions';

class PostNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: {}
        };
        console.log(this.props)
    }


    renderField(field) {
        // console.log(field)
        const { meta : { touched , error } } = field
        const className = `form-group ${ error && touched ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>
                    {field.label}
                </label>
                <input {...field.input} type="text" className="form-control"/>
                <div className="text-help">
                    {touched && error}
                </div>
            </div>
        )

    }

    onSubmit(values) {
        console.log(values);
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }


    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title of Post"
                        name="title"
                        component={this.renderField}
                        type="text"/>
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                        type="text"/>
                    <Field
                        label="Post Content"
                        name="content"
                        component={this.renderField}
                        type="text"/>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link  to="/" style={{marginLeft : '20px'}} className="btn btn-danger">
                        Cancel
                    </Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    //  console.log(values)
    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter a categories";
    }
    if (!values.content) {
        errors.content = "Enter a content";
    }

    return errors;

}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
 connect(null,{createPost})(PostNew)
); 