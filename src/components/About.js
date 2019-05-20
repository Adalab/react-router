import React from 'react';

class About extends React.Component {
  constructor(props) {
     super(props);

    console.log('Hola, soy el constructor de About, y nadie (de los míos) va antes que yo!');
  }

  componentDidMount() {
    console.log('Hola, soy el CDM de About, y aparezco cuando ya está to el pescao vendio, como el de Home!');
  }

  componentDidUpdate() {
    console.log('Yay, soy el CDU de About y si ganase bitcoins en lugar de props ahora estaría enterrao en billeteh!');
  }

  componentWillUnmount() {
    console.log('Hola, soy el CWU de About, y tb puedo sentir como que alguien camina sobre mi tumba!');
  }

  render() {
    console.log('Hola, yo soy el render de About, y sin mi no se pinta nada de About');
    const {title} = this.props;
    return (
      <h2>{title}</h2>
    );
  }
}

export default About;
