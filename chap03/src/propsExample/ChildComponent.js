const ChildComponent = props => {
    return <div>
        hello, I' m {props.name} and I'm {props.children}
    </div>
}

ChildComponent.defaultProps = {
    name: "yunseong"
};


export default ChildComponent;