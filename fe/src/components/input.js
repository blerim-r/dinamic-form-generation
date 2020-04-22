import React from "react";

const Input = (props) => {
    const { el } = props;

    const renderInput = (config) => {
        switch (config.type) {
            case 'text': {
                return (
                    <div className="form-group">
                        <label>
                            {config.label}
                            <input
                                className="form-control"
                                onChange={props.onChangeInput}
                                name={config.name}
                                type={config.type}
                                value={config.value ? config.value : ''}
                                readOnly={config.readonly}
                                placeholder={config.placeholder}/>
                        </label>

                        <span style={{color: 'red'}}>
                            {props.validator.message(config.name, config.value, config.rules)}
                        </span>
                    </div>
                )
            }
            case 'select': {
                return (
                    <div className="form-group">

                        <label>
                            {config.label}
                            <select
                                className={'form-control'}
                                name={config.multiple ? `${config.name}[]` : config.name}
                                onChange={props.onChangeInput}
                                disabled={config.readonly}
                                placeholder={config.placeholder}
                                defaultValue={config.default_value}
                                multiple={config.multiple}>
                                {config.options.map((el) => (
                                    <option key={el.value} value={el.value}>{el.label}</option>))}
                            </select>
                        </label>

                        <span style={{color: 'red'}}>
                            {props.validator.message(config.name, config.value || config.default_value, config.rules)}
                        </span>

                    </div>

                )
            }
            case 'number': {
                return (
                    <div className="form-group">
                        <label>
                            {config.label}
                            <input
                                className="form-control"
                                onChange={props.onChangeInput}
                                name={config.name}
                                type={config.type}
                                value={config.value ? config.value : ''}
                                readOnly={config.readonly}
                                placeholder={config.placeholder}/>
                        </label>

                        <span style={{color: 'red'}}>
                            {props.validator.message(config.name, config.value, config.rules)}
                        </span>
                    </div>
                )
            }
            case 'textarea': {
                return (
                    <div className="form-group">
                        <label>
                            {config.label}
                            <textarea
                                className="form-control"
                                onChange={props.onChangeInput}
                                name={config.name}
                                value={config.value ? config.value : ''}
                                readOnly={config.readonly}
                                placeholder={config.placeholder}/>
                        </label>

                        <span style={{color: 'red'}}>
                            {props.validator.message(config.name, config.value, config.rules)}
                        </span>
                    </div>
                )
            }
            default: return null

        }
    };

    return renderInput(el);
};

export default Input;

