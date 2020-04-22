import $ from 'jquery';
import React from "react";
import req from '../req';
import {general} from '../api';
import Input from "./input";
import Loading from "./Loading";
import SimpleReactValidator from 'simple-react-validator';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
            formError: null,
            formMessage: '',
        };
        this.validator = new SimpleReactValidator();

        this.onChangeInput = this.onChangeInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.removeFlashMsg = this.removeFlashMsg.bind(this);
    }

    async componentDidMount() {
        let {data: res} = await req(general.get_data);
        res = res.form_inputs.reduce(function (acc, item) {
            acc[item.multiple ? `${item.name}[]` : item.name] = item;

            return acc;
        }, {});

        this.setState((state, props) => ({
            data: res
        }))
    }

    onChangeInput(e) {
        const name = e.target.name;
        const val = e.target.value;

        this.setState((state, props) => {
            const dt = state.data[name];
            dt.value = val;

            return {
                [name]: dt
            }
        });
    }

    async submitForm() {
        if (this.validator.allValid()) {
            const {data: res} = await req({...general.post_data, data: $('form').serialize()});
            if (res.error) {
                this.setState({
                    formError: true,
                    formMessage: 'Form failed to save, please try again!'
                })
            } else {
                this.setState({
                    formError: false,
                    formMessage: 'Form saved successfully!'
                })
            }
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    removeFlashMsg() {
        this.setState({
            formError: null,
            formMessage: ''
        })
    }

    renderForm () {
        return (
            <form
                onChange={this.removeFlashMsg}
                style={{margin: '50px auto', width: 600}} onSubmit={event => event.preventDefault()}>
                {Object.values(this.state.data).map((el, index) => (
                    <div key={index}>
                        <Input
                            validator={this.validator}
                            onChangeInput={this.onChangeInput} el={el}/>
                    </div>
                ))}
                <button className={'form-control'} onClick={this.submitForm}>Submit</button>
                {this.state.formMessage && <div
                    className={this.state.formError ? 'mt-2 text-center alert alert-danger' : 'mt-2 text-center alert alert-success'}>
                    {this.state.formMessage}
                </div>}
            </form>
        )
    }

    render() {
        return (
            <>
                { Object.keys(this.state.data).length ? this.renderForm() : <Loading /> }
            </>
        )
    }
};

export default Form;