import React from "react";
import { ContentBlockSimple } from "@carbon/ibmdotcom-react";
import { settings } from "carbon-components";
import "./app.scss";

const { prefix } = settings;

function App() {
  const ctaProps = {
    cta: {
      href: "https://www.ibm.com"
    },
    style: "text",
    type: "local",
    heading: "Lorem ipsum dolor sit amet",
    copy: "Lorem ipsum dolor sit amet"
  };

  const image = {
    heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: {
      sources: [
        {
          src: "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
          breakpoint: 320
        },
        {
          src: "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
          breakpoint: 400
        },
        {
          src: "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
          breakpoint: 672
        }
      ],
      alt: "Image alt text",
      defaultSrc: "https://dummyimage.com/672x378/ee5396/161616&text=16:9"
    }
  };

  const copy = `Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
    Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
    nulla quis, *consequat* libero. Here are
    some common categories:

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
    `;

  return (
    <div className={`${prefix}--grid`}>
      <div class="bx--row">
        <div class="bx--col-sm-4 bx--col-lg-8 bx--offset-lg-4 content-block-story">
          <ContentBlockSimple
            copy={copy}
            heading="Curabitur malesuada varius mi eu posuere"
            image={image}
            cta={ctaProps}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
