import React from 'react';

const getImage = (imageName) => {
  try {
    return require(`../assets/${imageName}`);
  } catch {
    return require(`../assets/default.avif`); // fallback if image missing
  }
};

const Package = ({title, picture}) => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={getImage(picture)} alt="title" />
      <div style={styles.titleWrapper}>
        <p style={styles.title}>{title}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: 207,
    width: 134,
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    flexShrink: 0,
  },
  image: {
    height: '100%',
  },
  titleWrapper: {
    display: 'flex',
    width: '100%',
    background: 'linear-gradient(180deg, transparent -4.82%, #000 87.02%)',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  title: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 900,
    padding: '10px 15px',
  }
}

export default Package;