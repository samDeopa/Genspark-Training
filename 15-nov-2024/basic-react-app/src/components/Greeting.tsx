// interface input {
//   name: string;
//   color: string;
// }

export default function Greeting(props: any) {
  //   props.name = "Ham";
  props.object = { user: { name: "dam" } };
  return <h1>Greetings!! {props.object.user.name}</h1>;
}
