const tsxTemplate = `
import "./index.scss";

import { useSetup } from "./hooks";


type {COMP_NAME}Props = {
  
};

function {COMP_NAME}(props: {COMP_NAME}Props) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="c-{KEBAB_NAME}">
      {COMP_NAME}
    </div>
  );
}

export default {COMP_NAME};
`;

const scssTemplate = `
.c-{KEBAB_NAME} {

}
`;

const hooksTemplate = `
export function useSetup() {
  
  return {}
}
`;

module.exports = {
  tsxTemplate,
  scssTemplate,
  hooksTemplate,
};
