import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import NiceParagraphs from "../components/NiceParagraphs";

function Wrapper() {
  return (
    <div>
      <Title title=" A day at the beach" />
      <Subtitle subTitle="A nice day at the beach" />
      <NiceParagraphs
        paragraphs={[
          "Hey pal",
          "what name would you call a dog that has no both legs?",
          "well it does not matter what name you might call him",
          "trust me he is not coming!",
        ]}
      />
    </div>
  );
}

export default Wrapper;
