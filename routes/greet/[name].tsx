import type { PageProps, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(){
    return Response.redirect("https://facebook.com");
  }
}

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
