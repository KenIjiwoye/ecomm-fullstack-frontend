import React, { Component } from 'react';

export default class Sidenav extends Component {
    render() {
        return (
            <div>
                <h1 class="my-4">BMW Shop</h1>
              <div class="list-group">
                <button onClick={this.props.getSedans} style={styles.button} href="#" class="list-group-item">Sedans</button>
                <button onClick={this.props.getSavs} style={styles.button} href="#" class="list-group-item">SAV's</button>
                <button onClick={this.props.getAll} style={styles.button} href="#" class="list-group-item">All Cars</button>
              </div>
            </div>
        );
    }
}

const styles = {
  button: {
    color: 'white'
  }
}