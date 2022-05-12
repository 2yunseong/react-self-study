const DestructurePropsComponent = ({name, children}) => {
    return <div>
        hello, I' m {name} and I'm {children}
    </div>    
}   

DestructurePropsComponent.defaultProps = {
    name: "second me"
};

export default DestructurePropsComponent;