import PresentationViewer from "@/components/slides/PresentationViewer";
import { blackrockCarlyleSlides } from "@/components/slides/blackrockCarlyleData";

const Index = () => {
  return <PresentationViewer slides={blackrockCarlyleSlides} title="OmniStrat -- Investor Alert: Solfy / NBU" />;
};

export default Index;
