import REact from 'react';

const Button = (props) => {
    return (
        <input type="button" onClick={props.handleSubmit} classNam={props.type === 'success' ? '': ''} value={props.ttile } />
    );
};

export default Button;



<Button handleSubmit={handleSubmit} type="success" title="SUbmit" />