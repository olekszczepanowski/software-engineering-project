import { UserForm } from "@/components/UserForm";

export default async function Page() {
  return (
    <>
      <h1 className="text-center text-2xl mt-4">Dodawanie użytkownika</h1>
      <UserForm add={false} />
    </>
  );
}
