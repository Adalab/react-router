import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    console.log('Hola, soy el constructor de Home, y nadie va antes que yo!');
  }

  componentDidMount() {
    console.log('Hola, soy el CDM de Home, y aparezco cuando ya está to el pescao vendio!');
  }

  componentDidUpdate() {
    console.log('Yay, soy el CDU de Home y me he actualizado, casi na!');
  }

  componentWillUnmount() {
    console.log('Hola, soy el CWU de Home, y siento como que alguien camina sobre mi tumba!')
  }

  render() {
    console.log('Hola, yo soy el render de Home, y sin mi no se pinta nada')
    const {title} = this.props;
    return (
      <h2>{title}</h2>
    );
  }
}

export default Home;
