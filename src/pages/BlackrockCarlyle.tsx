import PresentationViewer from "@/components/slides/PresentationViewer";
import { blackrockCarlyleSlides } from "@/components/slides/blackrockCarlyleData";

const BlackrockCarlyle = () => {
  return <PresentationViewer slides={blackrockCarlyleSlides} title="OmniStrat — BlackRock & Carlyle" />;
};

export default BlackrockCarlyle;
