import { redirect } from "next/navigation";

export default function NotFound() {
  // return <div>Custom 404 Page</div>;
  redirect("/en");
}
