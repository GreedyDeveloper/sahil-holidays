import React from 'react';

const Card = ({title, description, children}) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
      {children}
    </div>
  );
};

const styles = {
  container: {
    width: '1200px',
    margin: '0 auto',
    marginTop: 40,
    padding: '36px 0 25px 40px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 1px 30px 0 rgba(0, 0, 0, .1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    display: 'flex',
    color: '#000000',
    lineHeight: '38px',
    fontWeight: 900,
    fontSize: 32,
  },
  description: {
    lineHeight: '19px',
    fontSize: 16,
    fontWeight: 400,
  }
}

export default Card;