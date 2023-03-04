import { Label, TextInput, Button } from "flowbite-react";

export default function Form() {
  return (
    <form className="flex flex-col gap-4 bg-gray-200 w-2/4 p-5 rounded-md">
      <div>
        <div className="mb-2 block">
          <Label value="Nome" />
        </div>
        <TextInput type="text" required={true} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Sinopse" />
        </div>
        <TextInput type="text" required={true} />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
