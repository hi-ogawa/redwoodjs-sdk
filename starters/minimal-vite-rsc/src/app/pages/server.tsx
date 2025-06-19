let counter = 0;

export function ServerCounter() {
  return (
    <form
      action={async () => {
        "use server";
        counter++;
      }}
    >
      <button>Server counter: {counter}</button>
    </form>
  );
}
