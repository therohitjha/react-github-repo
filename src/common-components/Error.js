import Cards from "./Cards";

export default function Error({ message }) {
  return <Cards>{JSON.stringify(message)}</Cards>;
}
