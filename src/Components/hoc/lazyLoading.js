import React from 'react';
import { Component } from 'react';

const lazyLoading = (importedComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importedComponent()
                .then(component => {
                    this.setState({ component: component.default })
                });
        }

        render() {
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null;
        }
    }
}

export default lazyLoading;