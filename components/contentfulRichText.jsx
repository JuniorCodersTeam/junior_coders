import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="md:text-lg my-4">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="heading-4xl">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="heading-3xl">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h3 className="heading-2xl">{children}</h3>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h3 className="heading-xl">{children}</h3>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h3 className="text-2xl my-10">{children}</h3>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.HR]: () => <hr className="hr-line" />,
  },
  renderMark: {
    [MARKS.BOLD]: (text) => {
      return <strong className="font-medium">{text}</strong>;
    },
    [MARKS.CODE]: (text) => {
      return <code className="code-block">{text}</code>;
    },
  },
  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
};

const getNewUpdatedRichText = (options, defaultOptions = RICHTEXT_OPTIONS) => {
  return Object.keys(defaultOptions).reduce((acc, key) => {
    if (options[key]) {
      return {
        ...acc,
        [key]: {
          ...RICHTEXT_OPTIONS[key],
          ...options[key],
        },
      };
    } else {
      return {
        ...acc,
        [key]: RICHTEXT_OPTIONS[key],
      };
    }
  }, {});
};
