import React from 'react'

class Video extends React.Component {

    state = {
        loading: true
    };
    componentDidMount() {
        if (this.video) {
            this.video.addEventListener("loadeddata", () => {
                this.setState({ loading: false });
            });
        }
    }

    componentWillUnmount() {
        if (this.video) {
            this.video.removeEventListener("loadeddata", () => {
            });
        }
    }


    render() {
        return (
            <video
                autoPlay
                muted
                loop
                style={{
                    position: "fixed",
                    width: "100%",
                    left: 0,
                    top: 0,
                    opacity: this.state.loading ? 0 : 1,
                    transition: "opacity, 2s ease-in-out"
                }}
            >
                <source src="public/Paris.mp4.mp4" type="video/mp4" />
            </video>
        );
    }
}

export default Video 