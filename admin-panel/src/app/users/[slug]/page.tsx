import { UserForm } from "@/components/UserForm";
import { User } from "../page";
import { parse } from "date-fns";
const parseDate = (date: string) => {
  const dateFormat = "yyyy-MM-dd";

  const parsedDate = parse(date, dateFormat, new Date());

  return parsedDate;
};

async function getUserData(slug: string): Promise<User> {
  const data = await fetch(`http://localhost:3333/users/${slug}`);
  const user = await data.json();
  return user;
}
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const user = await getUserData(slug);

  return (
    <>
      <h1 className="text-center text-2xl mt-4">Edytowanie użytkownika</h1>
      <UserForm
        name={user.name}
        surname={user.surname}
        email={user.email}
        phoneNumber={user.phoneNumber}
        birthDate={parseDate(user.birthDate)}
        joinDate={parseDate(user.joinDate)}
        slug={params.slug}
        add={true}
      />
    </>
  );
}
