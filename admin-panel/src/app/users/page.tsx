import { columns } from "./columns";
import { DataTable } from "./data-table";

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  password: string;
  dateOfBirth: string;
  joinDate: string;
  distanceTraveled: number;
}

async function getData(): Promise<User[]> {
  const data = await fetch("http://localhost:3333/users");
  const users = await data.json();
  return users;
}
export default async function Page() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10 w-11/12">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
