function NiceParagraphs(props) {
  let { paragraphs = [] } = props;
  let paragraph = paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));
  return <div>{paragraph}</div>;
}

export default NiceParagraphs;
