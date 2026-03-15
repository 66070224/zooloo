interface Props {
  name: string;
}

export default function Button(props: Props) {
  return (
    <>
      <button className="bg-amber-300 p-3 text-black rounded-2xl hover:bg-blue-500 cursor-pointer hover:text-white">
        {props.name}
      </button>
    </>
  );
}
