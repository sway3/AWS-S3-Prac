import Container from './Container';
import Card from './Card';
import UploadImage from './UploadImage';

const ImageBoard = () => {
  return (
    <>
      <UploadImage />
      <Container>
        <Card size='small' />
        <Card size='medium' />
        <Card size='large' />
        <Card size='medium' />
        <Card size='large' />
        <Card size='large' />
        <Card size='medium' />
        <Card size='large' />
        <Card size='small' />
        <Card size='medium' />
        <Card size='medium' />
        <Card size='large' />
        <Card size='small' />
      </Container>
    </>
  );
};

export default ImageBoard;
