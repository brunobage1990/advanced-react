import React, { Component } from 'react';

class ErrorBoundary extends Component {

    render() {
        return this.props.children
    }
}

export default ErrorBoundary;