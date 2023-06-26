const IdeaInput = () => {
  return (
    <form>
      <input type="text" placeholder="Idea" className="px-1" />
      <button
        type="submit"
        className="px-1 mx-2 bg-lightest border-solid border-2 border-darkest rounded-md"
      >
        Plant
      </button>
    </form>
  );
};

export default IdeaInput;
