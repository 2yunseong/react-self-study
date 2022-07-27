import ColorContext from "../contexts/color";

const ColorBox = () => {
    return(
        <ColorContext.Consumer>
        {
            ({ state }) => (
                <div style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }} />
            )
        }
        </ColorContext.Consumer>
    );
}

export default ColorBox;