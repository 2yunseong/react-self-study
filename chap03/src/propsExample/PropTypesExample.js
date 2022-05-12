import PropTypes from 'prop-types';

const PropTypesExample = ({name, children}) =>{
    return <div>
    hello, I' m {name} and I'm {children}
    </div>    
};

PropTypesExample.defaultProps = {
    name: "yunseong"
};

PropTypesExample.propTypes = {
    name: PropTypes.string
};



export default PropTypesExample;