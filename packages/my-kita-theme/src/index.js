const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\my-kita-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "my-kita-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
