function customRender(reactElement, mainContainer) {
  //   const domElement = document.createElement(reactElement.type);

  //   domElement.innerHTML = reactElement.children;
  //   domElement.href = reactElement.props.href;
  //   domElement.target = reactElement.props.target;

  //   mainContainer.appendChild(domElement);

  /// better way to handle props and children
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google",
};

const mainContainer = document.querySelector(".root");

customRender(reactElement, mainContainer);
